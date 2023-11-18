import { MediaContent } from '@utilities/interfacesApp';
import React from 'react';
import TrendingUnit from './TrendingUnit/TrendingUnit';

interface TrendingProps {
  trending: MediaContent[];
}

function Trending({ trending }: TrendingProps) {
  const trendingGrid = trending.map((item, index) => {
    return (
      <TrendingUnit
        title={item.title}
        posterPath={item.posterPath}
        key={item.title}
        mediaType={item.mediaType}
        id={item.id}
        variant={index === 0 ? 'large' : 'default'}
        priority={index === 0}
      />
    );
  });

  return (
    <section
      aria-label="Trending films"
      className="container-fluid o-background-container c-trending u-padding-right-none@sm-down"
    >
      <div className="container u-padding-right-none@sm-down">
        <div className="row">
          <h2 className="col o-homepage-section-title">Trending Today</h2>
        </div>
        {/* Tablet & Desktop Layout */}
        <div className="row c-trending__content u-display-none@sm-down">
          <div className="col col--sm-4 u-padding-right-2xsmall">{trendingGrid[0]}</div>
          <div className="col col--sm-8 c-trending__poster-grid u-padding-left-2xsmall">{trendingGrid.slice(1)}</div>
        </div>
        {/* Moblie Layout */}
        <div className="c-trending__content u-display-none@md-up">
          <div className="c-trending__scrollbox">{trendingGrid}</div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
