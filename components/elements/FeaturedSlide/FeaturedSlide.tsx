import React from 'react';
import { SwipeableHandlers } from 'react-swipeable/es/types';
import Button from '../Button/Button';

interface FeaturedSlideProps {
  postTitle: string;
  backgroundImageUrl: string;
  buttonText?: string;
  swipeHandler?: SwipeableHandlers | undefined;
}

function FeaturedSlide({
  postTitle,
  backgroundImageUrl,
  buttonText,
  swipeHandler,
}: FeaturedSlideProps) {
  return (
    <div
      className={`c-featured-slide c-featured-slide--${'position'}Slide-left`}
      ref={swipeHandler?.ref}
    >
      <img
        src={backgroundImageUrl}
        alt={`${postTitle} cover`}
        className="c-featured-slide__cover-image"
      />
      <div className="c-featured-slide__image-overlay" />
      <div className="container c-featured-slide__content">
        <div className="c-featured-slide__post-title">{postTitle}</div>
        <div className="c-featured-slide__read-more-button">
          <Button>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
}

FeaturedSlide.defaultProps = {
  buttonText: 'Read more',
  swipeHandler: undefined,
};

export default FeaturedSlide;
