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

export const activeButtonStyle = { opacity: 1, cursor: 'pointer' };
export const inactiveButtonStyle = { opacity: 0, cursor: 'default', pointerEvents: 'none' };
