import React from 'react';
import Image from 'next/image';
import { SwipeableHandlers } from 'react-swipeable/es/types';
import { Post } from '@utilities/interfacesApp';
import { Button } from '@elements';

interface FeaturedSlideProps extends Post {
  buttonText?: string;
  swipeHandler?: SwipeableHandlers | undefined;
}

function FeaturedSlide({
  postTitle,
  backgroundImage,
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
      <Image
        src={backgroundImage}
        alt={`${postTitle} cover`}
        className="c-featured-slide__cover-image"
        quality={15}
        priority
      />
      <div className="c-featured-slide__image-overlay" />
    </div>
  );
}

export default FeaturedSlide;
