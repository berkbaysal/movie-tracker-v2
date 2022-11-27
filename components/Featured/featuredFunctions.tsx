import React from 'react';
import { SwipeableHandlers } from 'react-swipeable/es/types';
import FeaturedSlide from '../elements/FeaturedSlide/FeaturedSlide';

export interface Post {
  postTitle: string;
  backgroundImageUrl: string;
  id: number;
}
const slideFunctions = {
  // Generates an unused key to make React treat an element as new
  getFreshKey(keys: number[], id: number) {
    if (keys.includes(id)) {
      let newKey = 0;
      do {
        newKey = Math.floor(Math.random() * 10000);
      } while (keys.includes(newKey));
      return newKey;
    }
    return id;
  },

  // Calculate index of previous (left side) slide based on given index
  getPrevSlideIndex(currentSlideIndex: number, arraySize: number) {
    const index = (arraySize + currentSlideIndex - 1) % arraySize;
    return index;
  },

  // Calculate index of next (right side) slide based on given index
  getNextSlideIndex(currentSlideIndex: number, arraySize: number) {
    const index = (currentSlideIndex + 1) % arraySize;
    return index;
  },

  // Initialize slides based on post index 0 being on display
  initSlides(posts: Post[], bufferSlideCount: number) {
    const slides: number[] = [];
    const keys: number[] = [];
    /* i refers to slide position, 0 being displayed ex: -2 -1 0 1 2 */
    for (let i = -bufferSlideCount; i <= bufferSlideCount; i += 1) {
      let index = (posts.length + i) % posts.length;
      while (index < 0) {
        index += posts.length;
      }
      slides.push(index);
      // Ensure no duplicate keys if there are less than 5 posts
      keys.push(this.getFreshKey(keys, posts[index].id));
    }
    return { slides, keys };
  },

  // Create JSX Elements for slides based on given parameters
  createSlides(
    renderedSlides: { slides: number[]; keys: number[] },
    posts: Post[],
    bufferSlideCount: number,
    swipeHandler: SwipeableHandlers,
    buttonText = 'Read more'
  ) {
    const { slides, keys } = renderedSlides;
    return slides.map((slideIndex, renderIndex) => {
      const post = posts[slideIndex];
      const slideStyle = {
        transform: `translateX(${(renderIndex - bufferSlideCount) * 100}%)`,
      };
      const currentlyDisplayed = renderIndex - bufferSlideCount === 0;
      return (
        <li
          className="c-featured__slide-wrapper"
          style={slideStyle}
          key={keys[renderIndex]}
          aria-hidden={currentlyDisplayed ? 'false' : 'true'} // Hide off screen slides from accessability tools
        >
          <FeaturedSlide
            postTitle={post.postTitle}
            backgroundImageUrl={post.backgroundImageUrl}
            buttonText={buttonText}
            key={post.id}
            swipeHandler={
              renderIndex === bufferSlideCount ? swipeHandler : undefined
            }
          />
        </li>
      );
    });
  },

  // Slides in a direction based on input
  slide(
    oldRenderedSlides: { slides: number[]; keys: number[] },
    posts: Post[],
    side: 'left' | 'right'
  ) {
    const { slides, keys } = oldRenderedSlides;
    const size = slides.length;

    if (side === 'right') {
      const newSlideIndex = this.getNextSlideIndex(
        slides[size - 1],
        posts.length
      );
      const newSlideKey = this.getFreshKey(keys, posts[newSlideIndex].id);
      return {
        slides: [...slides.slice(1, size), newSlideIndex],
        keys: [...keys.slice(1, size), newSlideKey],
      };
    }
    if (side === 'left') {
      const newSlideIndex = this.getPrevSlideIndex(slides[0], posts.length);
      const newSlideKey = this.getFreshKey(keys, posts[newSlideIndex].id);
      return {
        slides: [newSlideIndex, ...slides.slice(0, size - 1)],
        keys: [newSlideKey, ...keys.slice(0, size - 1)],
      };
    }
    // Default return old values
    return oldRenderedSlides;
  },
};

export default slideFunctions;
