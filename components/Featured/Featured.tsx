import React, { useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useSwipeable } from 'react-swipeable';
import config from '../../util/config';
import slideFunctions, { Post } from './featuredFunctions';

// Load number of buffer slides on each side, default to 2
const bufferSlideCount = config.FEAUTRED_BUFFER_SLIDES
  ? config.FEAUTRED_BUFFER_SLIDES
  : 2;

interface FeaturedProps {
  posts: Post[];
  buttonText?: string;
}

function Featured({ posts, buttonText = 'Read more' }: FeaturedProps) {
  // State holds indexes of currently rendered slides (.slides) and keys assigned to them (.keys)
  const [renderedSlides, setRenderedSlides] = useState(
    slideFunctions.initSlides(posts, bufferSlideCount)
  );

  function slide(direction: 'left' | 'right') {
    setRenderedSlides((oldRenderedSlides) =>
      slideFunctions.slide(oldRenderedSlides, posts, direction)
    );
  }

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => slide('right'),
    onSwipedRight: () => slide('left'),
    preventScrollOnSwipe: true,
  });

  return (
    <section
      aria-label="featured posts"
      className="container-fluid u-padding-none c-featured"
    >
      <div className="container c-featured__control-overlay">
        <BsChevronLeft
          role="button"
          tabIndex={0}
          aria-label="previous post"
          className="c-featured__slide-control c-featured__slide-control--left"
          onClick={() => slide('left')}
        />
        <BsChevronLeft
          role="button"
          tabIndex={0}
          aria-label="next post"
          className="c-featured__slide-control c-featured__slide-control--right"
          onClick={() => slide('right')}
        />
      </div>
      <ul>
        {slideFunctions.createSlides(
          renderedSlides,
          posts,
          bufferSlideCount,
          swipeHandler,
          buttonText
        )}
      </ul>
    </section>
  );
}

export default Featured;
