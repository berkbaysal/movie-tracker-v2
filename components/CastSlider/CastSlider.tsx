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

  function setCastPictureSize() {
    if (!sliderFrame.current || !slider.current) return;
    const sliderWidth = slider.current.clientWidth ?? 0;
    const slidesPerPage = getSlidesPerPage(sliderWidth);
    const styleGap = parseFloat(getComputedStyle(sliderFrame.current).gap);
    const gapWidth = Number.isNaN(styleGap) ? 0 : styleGap;
    let targetWidth = 0;
    if (matchMedia('(hover: none)').matches) {
      const targetSlides = slidesPerPage + 0.5;
      targetWidth = (sliderWidth - (targetSlides - 1) * gapWidth) / targetSlides;
    } else {
      targetWidth = (sliderWidth - (slidesPerPage - 1) * gapWidth) / slidesPerPage;
    }
    setCastPictureWidth(targetWidth);
  }

  function handleScroll(slide: 'left' | 'right') {
    if (!sliderFrame.current || !slider.current) return;
    const sliderWidth = slider.current.clientWidth ?? 0;
    const slidesPerPage = getSlidesPerPage(sliderWidth);
    const totalPages = Math.ceil(cast.length / slidesPerPage);
    const styleGap = parseFloat(getComputedStyle(sliderFrame.current).gap);
    const gapWidth = Number.isNaN(styleGap) ? 0 : styleGap;
    let leftOver = (cast.length % slidesPerPage) * (castPictureWidth + gapWidth);
    const pageOffset = (castPictureWidth + gapWidth) * slidesPerPage;
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
      slider.current?.scrollTo(0, 0);
      setCastPictureSize();
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [slider.current?.clientWidth]);

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
      </div>
    </section>
  );
}

export default CastSlider;
