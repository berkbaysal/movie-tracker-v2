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

export const SLIDES_PER_PAGE = 7;

export const activeButtonStyle = { opacity: 1, cursor: 'pointer' };
export const inactiveButtonStyle = { opacity: 0, cursor: 'default', pointerEvents: 'none' };
