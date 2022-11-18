import React from 'react';
import FeaturedSlide from './elements/FeaturedSlide';

function Featured() {
  return (
    <div className="container-fluid u-padding-none c-featured">
      <FeaturedSlide
        postTitle="shaping film through music"
        backgroundImageUrl="https://www.musicnotes.com/now/wp-content/uploads/Piano-Fingerings.png"
      />
    </div>
  );
}

export default Featured;
