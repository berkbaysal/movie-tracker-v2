export type TCastSliderEdgeVisible = 'left' | 'right' | 'both';

export interface ICastSliderState {
  currentOffset: number;
  currentPage: number;
  edgeVisible: TCastSliderEdgeVisible;
}

export const INITIAL_SLIDE_STATE: ICastSliderState = {
  currentOffset: 0,
  currentPage: 1,
  edgeVisible: 'right',
};

interface ISliderUpdateParams {
  styleGap: number;
  sliderWidth: number;
  castSize: number;
  castPictureWidth: number;
  currentState: ICastSliderState;
  slide: 'left' | 'right';
}

export function getSlidesPerPage(sliderSize: number) {
  switch (true) {
    case sliderSize < 400:
      return 2;
    case sliderSize < 768:
      return 4;
    case sliderSize < 800:
      return 5;
    case sliderSize < 1000:
      return 6;
    default:
      return 7;
  }
}

export function getTargetWidth(styleGap: number, sliderWidth: number): number {
  const slidesPerPage = getSlidesPerPage(sliderWidth);
  const gapWidth = Number.isNaN(styleGap) ? 0 : styleGap;
  let targetWidth = 0;
  if (matchMedia('(hover: none)').matches) {
    const targetSlides = slidesPerPage + 0.5;
    targetWidth = (sliderWidth - (targetSlides - 1) * gapWidth) / targetSlides;
  } else {
    targetWidth = (sliderWidth - (slidesPerPage - 1) * gapWidth) / slidesPerPage;
  }
  return targetWidth;
}

export function updateSliderState({
  sliderWidth,
  castSize,
  castPictureWidth,
  styleGap,
  currentState,
  slide,
}: ISliderUpdateParams): ICastSliderState {
  const slidesPerPage = getSlidesPerPage(sliderWidth);
  const totalPages = Math.ceil(castSize / slidesPerPage);
  let leftOver = (castSize % slidesPerPage) * (castPictureWidth + styleGap);
  const pageOffset = (castPictureWidth + styleGap) * slidesPerPage;
  if (leftOver === 0) leftOver = pageOffset;
  const maxOffset = (totalPages - 1) * pageOffset + leftOver - sliderWidth - styleGap;
  let newOffset = 0;
  let newPage = 1;
  let edgeVisible: TCastSliderEdgeVisible = 'both';
  switch (slide) {
    case 'left':
      newOffset = Math.max(currentState.currentOffset - pageOffset, 0);
      newPage = Math.max(currentState.currentPage - 1, 1);
      if (newOffset % pageOffset !== 0) {
        newOffset = Math.max(currentState.currentOffset - (newOffset % pageOffset), 0);
      }
      edgeVisible = newOffset === 0 ? 'right' : 'both';
      break;
    default:
      newOffset = Math.min(currentState.currentOffset + pageOffset, maxOffset);
      newPage = Math.min(currentState.currentPage + 1, totalPages);
      edgeVisible = newOffset === maxOffset ? 'left' : 'both';
      break;
  }
  return { currentOffset: newOffset, currentPage: newPage, edgeVisible };
}

export const activeButtonStyle = { opacity: 1, cursor: 'pointer' };
export const inactiveButtonStyle = { opacity: 0, cursor: 'default', pointerEvents: 'none' };
