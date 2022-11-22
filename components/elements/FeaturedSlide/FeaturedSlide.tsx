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
  buttonText = 'Read more',
  swipeHandler = undefined,
}: FeaturedSlideProps) {
  return (
    <div className="c-featured-slide" ref={swipeHandler?.ref}>
      <div className="container c-featured-slide__content">
        <h3 className="c-featured-slide__post-title">{postTitle}</h3>
        <div className="c-featured-slide__read-more-button">
          <Button
            label={buttonText}
            role="link"
            disabled={swipeHandler === undefined} // Used to prevent focusing off screen
          />
        </div>
      </div>
      <img
        src={backgroundImageUrl}
        alt={`${postTitle} cover`}
        className="c-featured-slide__cover-image"
      />
      <div className="c-featured-slide__image-overlay" />
    </div>
  );
}

export default FeaturedSlide;
