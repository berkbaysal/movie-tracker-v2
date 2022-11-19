import React, { useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import FeaturedSlide from './elements/FeaturedSlide';

interface FeaturedProps {
  posts: { postTitle: string; backgroundImageUrl: string; id: number }[];
  buttonText?: string;
}

const mockDBdata = [
  {
    postTitle: '1shaping film through music',
    backgroundImageUrl:
      'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
    id: 1,
  },
  {
    postTitle: '2shaping film through music',
    backgroundImageUrl:
      'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
    id: 2,
  },
  {
    postTitle: '3shaping film through music',
    backgroundImageUrl:
      'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
    id: 3,
  },
  {
    postTitle: '4shaping film through music',
    backgroundImageUrl:
      'https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png',
    id: 4,
  },
];

function Featured({ posts = mockDBdata, buttonText }: FeaturedProps) {
  // REPLACE POSTS WHEN DB IS CONNECTED
  const expandedPosts: typeof posts = [];
  while (expandedPosts.length < 5) {
    expandedPosts.push(...posts);
  }

  function calculateSlide(index: number) {
    const slides = [];
    const length = expandedPosts.length >= 5 ? expandedPosts.length : 5;
    for (let i = -2; i < 3; i += 1) {
      slides.push((index + i + length) % length);
    }
    return slides;
  }
  const [slidePostIndex, setSlidePostIndex] = useState(calculateSlide(0));

  function createSlides() {
    return expandedPosts.map((post, index) => {
      const slideLocationIndex = slidePostIndex.indexOf(index);
      return (
        <div
          className="c-featured__slide-wrapper"
          style={{
            transform: `translateX(${(slideLocationIndex - 2) * 100}%)`,
            transition:
              slidePostIndex.indexOf(index) === 0 ||
              slidePostIndex.indexOf(index) === 4
                ? 'none'
                : '',
          }}
          key={post.id}
        >
          <FeaturedSlide
            postTitle={post.postTitle}
            backgroundImageUrl={post.backgroundImageUrl}
            buttonText={buttonText}
          />
        </div>
      );
    });
  }

  function slide(direction: 'left' | 'right') {
    if (direction === 'left') {
      setSlidePostIndex((oldOrder) => {
        return calculateSlide(oldOrder[1]);
      });
    }
    if (direction === 'right') {
      setSlidePostIndex((oldOrder) => {
        return calculateSlide(oldOrder[3]);
      });
    }
  }

  return (
    <div className="container-fluid u-padding-none c-featured">
      {createSlides()}
      <div className="container c-featured__control-overlay">
        <BsChevronLeft
          className="c-featured__slide-control c-featured__slide-control--left"
          onClick={() => slide('left')}
        />
        <BsChevronLeft
          className="c-featured__slide-control c-featured__slide-control--right"
          onClick={() => slide('right')}
        />
      </div>
    </div>
  );
}

Featured.defaultProps = {
  buttonText: 'Read more',
};

export default Featured;
