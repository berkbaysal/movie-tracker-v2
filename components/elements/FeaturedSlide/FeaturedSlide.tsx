import React from 'react';
import Button from '../Button/Button';

interface FeaturedSlideProps {
  postTitle: string;
  backgroundImageUrl: string;
  buttonText?: string;
  style?: React.CSSProperties;
}

function FeaturedSlide({
  postTitle,
  backgroundImageUrl,
  buttonText,
  style,
}: FeaturedSlideProps) {
  return (
    <div
      className={`c-featured-slide c-featured-slide--${'position'}Slide-left`}
      style={style}
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
  style: {},
};

export default FeaturedSlide;
