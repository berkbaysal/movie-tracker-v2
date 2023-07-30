'use client';

import { MovieCastCredit } from '@utilities/interfacesAPI';
import { imgURL, posterSize } from '@utilities/resources';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {
  activeButtonStyle,
  ICastSliderState,
  inactiveButtonStyle,
  INITIAL_SLIDE_STATE,
  SLIDES_PER_PAGE,
} from './castSliderConfig';

interface ICastSliderProps {
  cast: MovieCastCredit[];
}

function CastSlider({ cast }: ICastSliderProps) {
  const slider = useRef<HTMLDivElement>(null);
  const sliderFrame = useRef<HTMLDivElement>(null);
  const [sliderState, setSliderState] = useState<ICastSliderState>(INITIAL_SLIDE_STATE);
  const [castPictureWidth, setCastPictureWidth] = useState<number>(0);

  function setCastPictureSize() {
    if (!sliderFrame.current || !slider.current) return;
    const sliderWidth = slider.current.clientWidth ?? 0;
    const styleGap = parseFloat(getComputedStyle(sliderFrame.current).gap);
    const gapWidth = Number.isNaN(styleGap) ? 0 : styleGap;
    const targetWidth = (sliderWidth - (SLIDES_PER_PAGE - 1) * gapWidth) / SLIDES_PER_PAGE;
    setCastPictureWidth(targetWidth);
  }

  function handleScroll(slide: 'left' | 'right') {
    if (!sliderFrame.current || !slider.current) return;
    const totalPages = Math.ceil(cast.length / SLIDES_PER_PAGE);
    const styleGap = parseFloat(getComputedStyle(sliderFrame.current).gap);
    const gapWidth = Number.isNaN(styleGap) ? 0 : styleGap;
    let leftOver = (cast.length % SLIDES_PER_PAGE) * (castPictureWidth + gapWidth);
    const pageOffset = (castPictureWidth + gapWidth) * SLIDES_PER_PAGE;
    if (leftOver === 0) leftOver = pageOffset;
    const maxOffset = (totalPages - 1) * pageOffset + leftOver - slider.current.clientWidth - gapWidth;
    if (slide === 'left') {
      let newOffset = Math.max(sliderState.currentOffset - pageOffset, 0);
      const newPage = Math.max(sliderState.currentPage - 1, 1);
      if (newOffset % pageOffset !== 0) {
        newOffset = Math.max(sliderState.currentOffset - (newOffset % pageOffset), 0);
      }
      setSliderState({
        currentOffset: newOffset,
        currentPage: newPage,
        edgeVisible: newOffset === 0 ? 'right' : 'both',
      });
    }
    if (slide === 'right') {
      const newOffset = Math.min(sliderState.currentOffset + pageOffset, maxOffset);
      const newPage = Math.min(sliderState.currentPage + 1, totalPages);
      setSliderState({
        currentOffset: newOffset,
        currentPage: newPage,
        edgeVisible: newOffset === maxOffset ? 'left' : 'both',
      });
    }
  }

  useEffect(() => {
    setCastPictureSize();
    function handleResize() {
      setSliderState(INITIAL_SLIDE_STATE);
      setCastPictureSize();
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section aria-label="Cast" className="container-fluid o-background-container">
      <div className="container">
        <div className="row">
          <div className="col  u-position-relative">
            <div className="c-cast-slider">
              <div className="c-cast-slider__slider-control-overlay">
                <BsChevronLeft
                  className="c-cast-slider__slider-control"
                  style={sliderState.edgeVisible === 'right' ? inactiveButtonStyle : activeButtonStyle}
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
                >
                  {cast.map((castMember) => (
                    <div className="c-cast-slider__cast-member" key={castMember.cast_id}>
                      <div className="c-cast-slider__cast-image-wrapper" style={{ width: `${castPictureWidth}px` }}>
                        <Image
                          src={`${imgURL}/${posterSize.medium.url}${castMember.profile_path}`}
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
                  style={sliderState.edgeVisible === 'left' ? inactiveButtonStyle : activeButtonStyle}
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
    </section>
  );
}

export default CastSlider;
