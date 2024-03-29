'use client';

import PlaceholderAvatar from '@public/img/placeholder_avatar.png';
import { Cast } from '@utilities/interfacesApp';
import { imgURL, posterSize } from '@utilities/resources';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {
  activeButtonStyle,
  ICastSliderState,
  inactiveButtonStyle,
  INITIAL_SLIDE_STATE,
  getTargetWidth,
  updateSliderState,
  getSlidesPerPage,
} from './castSliderConfig';

interface ICastSliderProps {
  cast: Cast[];
}

function CastSlider({ cast }: ICastSliderProps) {
  const slider = useRef<HTMLDivElement>(null);
  const sliderFrame = useRef<HTMLDivElement>(null);
  const [sliderState, setSliderState] = useState<ICastSliderState>(INITIAL_SLIDE_STATE);
  const [castPictureWidth, setCastPictureWidth] = useState<number>(0);

  function setPictureSize() {
    const sliderWidth = slider.current?.clientWidth ?? 0;
    const gap = sliderFrame.current ? getComputedStyle(sliderFrame.current).gap : '0';
    const styleGap = parseFloat(gap);
    const targetWidth = getTargetWidth(styleGap, sliderWidth);
    const isSlideable = getSlidesPerPage(slider.current?.clientWidth ?? 0) <= cast.length;
    setSliderState({
      ...INITIAL_SLIDE_STATE,
      edgeVisible: isSlideable ? 'right' : 'none',
    });
    setCastPictureWidth(targetWidth);
  }

  function handleScroll(slide: 'left' | 'right') {
    const sliderWidth = slider.current?.clientWidth ?? 0;
    const gapString = sliderFrame.current ? getComputedStyle(sliderFrame.current).gap : '0';
    const gap = parseFloat(gapString);
    const styleGap = Number.isNaN(gap) ? 0 : gap;
    const newState = updateSliderState({
      styleGap,
      sliderWidth,
      castSize: cast.length,
      castPictureWidth,
      currentState: sliderState,
      slide,
    });
    setSliderState(newState);
  }

  useEffect(() => {
    setPictureSize();
    function handleResize() {
      setPictureSize();
      if (window.matchMedia('(pointer: fine)').matches) {
        slider.current?.scrollTo(0, 0);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slider.current?.clientWidth, cast.length]);

  return (
    <section aria-label="Cast">
      <div className="container-fluid o-background-container">
        <div className="container">
          <h2 className="o-detail-page-section-title">Cast:</h2>
        </div>
      </div>
      <div className="container-fluid o-background-container c-cast-slider__ignores-bounds-on-touch">
        <div className="container c-cast-slider__ignores-bounds-on-touch">
          <div className="row c-cast-slider__ignores-bounds-on-touch">
            <div className="col  u-position-relative c-cast-slider__ignores-bounds-on-touch">
              <div className="c-cast-slider">
                <div className="c-cast-slider__slider-control-overlay">
                  <BsChevronLeft
                    className="c-cast-slider__slider-control"
                    style={['both', 'left'].includes(sliderState.edgeVisible) ? activeButtonStyle : inactiveButtonStyle}
                    role="button"
                    onClick={() => {
                      handleScroll('left');
                    }}
                  />
                </div>
                <div className="c-cast-slider__slider-wrapper" ref={slider}>
                  <div
                    className="c-cast-slider__slider-frame"
                    ref={sliderFrame}
                    style={{ transform: `translateX(-${sliderState.currentOffset}px)` }}
                    data-testid="slider-frame"
                  >
                    {cast.map((castMember) => (
                      <div className="c-cast-slider__cast-member" key={castMember.id}>
                        <div className="c-cast-slider__cast-image-wrapper" style={{ width: `${castPictureWidth}px` }}>
                          <Image
                            src={
                              castMember.picturePath
                                ? `${imgURL}/${posterSize.medium.url}${castMember.picturePath}`
                                : PlaceholderAvatar
                            }
                            width={posterSize.medium.width}
                            height={posterSize.medium.height}
                            alt={`${castMember.name} profile image`}
                            className="c-cast-slider__cast-image"
                          />
                        </div>
                        <div className="c-cast-slider__cast-info" style={{ width: `${castPictureWidth}px` }}>
                          <div className="c-cast-slider__cast-name">{castMember.name}</div>
                          <div className="c-cast-slider__character-name">{castMember.character}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="c-cast-slider__slider-control-overlay">
                  <BsChevronRight
                    className="c-cast-slider__slider-control"
                    style={
                      ['both', 'right'].includes(sliderState.edgeVisible) ? activeButtonStyle : inactiveButtonStyle
                    }
                    role="button"
                    onClick={() => {
                      handleScroll('right');
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CastSlider;
