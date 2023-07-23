'use client';

import { MovieCastCredit } from '@utilities/interfacesAPI';
import React, { useState, useEffect, useRef } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface ICastSliderProps {
  cast: MovieCastCredit[];
}

type TCastSliderEdgeVisible = 'left' | 'right' | 'none';

interface ICastSliderState {
  currentOffset: number;
  previousMoves: number[];
  edgeVisible: TCastSliderEdgeVisible;
}

const INITIAL_SLIDE_STATE: ICastSliderState = {
  currentOffset: 0,
  previousMoves: [],
  edgeVisible: 'left',
};

function CastSlider({ cast }: ICastSliderProps) {
  const slider = useRef<HTMLDivElement>(null);
  const sliderFrame = useRef<HTMLDivElement>(null);
  const leftControl = useRef<HTMLDivElement>(null);
  const rightControl = useRef<HTMLDivElement>(null);
  const [sliderState, setSliderState] = useState<ICastSliderState>(INITIAL_SLIDE_STATE);

  function handleSlide(side: 'left' | 'right') {
    if (side === 'left') {
      setSliderState((prevState) => {
        const previousMoves = [...prevState.previousMoves];
        const currentOffset = prevState.currentOffset - (previousMoves.pop() || 0);
        return {
          currentOffset,
          previousMoves,
          edgeVisible: currentOffset === 0 ? 'left' : 'none',
        };
      });
      return;
    }
    if (side === 'right') {
      const sliderWidth = slider.current?.clientWidth || 0;
      const leftOverlayWidth = leftControl.current?.clientWidth || 0;
      const rightOverlayWidth = rightControl.current?.clientWidth || 0;

      let targetNode: HTMLElement | undefined;
      let isRightIndicatorVisible = false;
      const nodeList = sliderFrame.current?.childNodes as unknown as HTMLElement[];
      if (nodeList) {
        for (let i = 0; i < nodeList.length; i += 1) {
          const nodeOffset = nodeList[i].offsetLeft + nodeList[i].clientWidth - sliderState.currentOffset;
          if (!targetNode && nodeOffset > sliderWidth - rightOverlayWidth - leftOverlayWidth) {
            targetNode = sliderFrame.current?.childNodes[i] as unknown as HTMLElement;
          } else if (targetNode && !isRightIndicatorVisible) {
            if (sliderWidth < nodeList[i].offsetLeft - targetNode.offsetLeft) {
              isRightIndicatorVisible = true;
              break;
            }
          }
        }
      }
      let targetMove = targetNode?.offsetLeft || 0;
      targetMove -= isRightIndicatorVisible ? rightOverlayWidth : 0;
      const lastEntry = sliderFrame.current?.lastChild as HTMLElement;
      const maxOffset = lastEntry.offsetLeft + lastEntry.clientWidth - sliderWidth;
      targetMove = Math.min(targetMove, maxOffset);
      setSliderState((prevState) => ({
        currentOffset: targetMove,
        previousMoves: [...prevState.previousMoves, targetMove - prevState.currentOffset],
        edgeVisible: isRightIndicatorVisible ? 'none' : 'right',
      }));
    }
  }

  useEffect(() => {
    function handleResize() {
      setSliderState(INITIAL_SLIDE_STATE);
    }

    document.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section aria-label="Cast" className="container-fluid o-background-container">
      <div className="container">
        <div className="row">
          <div className="col u-background-color-success">
            <div>
              <div className="c-cast-slider" ref={slider}>
                <div
                  className="c-cast-slider__slider-frame"
                  ref={sliderFrame}
                  style={{ transform: `translateX(-${sliderState.currentOffset}px)` }}
                >
                  {cast.map((castMember) => (
                    <div className="c-cast-slider__cast-image">{castMember.name}</div>
                  ))}
                </div>
              </div>
              {sliderState.edgeVisible !== 'left' && (
                <div
                  className="c-cast-slider__slider-control-overlay c-cast-slider__slider-control-overlay--left"
                  ref={leftControl}
                >
                  <BsChevronLeft
                    className="c-cast-slider__slider-control"
                    onClick={() => {
                      handleSlide('left');
                    }}
                  />
                </div>
              )}
              {sliderState.edgeVisible !== 'right' && (
                <div
                  className="c-cast-slider__slider-control-overlay c-cast-slider__slider-control-overlay--right"
                  ref={rightControl}
                >
                  <BsChevronRight
                    className="c-cast-slider__slider-control"
                    onClick={() => {
                      handleSlide('right');
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CastSlider;
