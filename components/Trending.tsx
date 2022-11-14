import React from 'react';
import { MovieListResult, TVListResult } from '../static/interfaces';
import TrendingUnit from './elements/TrendingUnit';

interface TrendingProps {
  trending: (MovieListResult | TVListResult)[];
}

function Trending({ trending }: TrendingProps) {
  const trendingGrid = trending.map((item, index) => {
    const title = item.media_type === 'movie' ? item.title : item.original_name;
    return (
      <TrendingUnit
        title={title}
        posterPath={item.poster_path}
        key={title}
        variant={index === 0 ? 'large' : 'default'}
      />
    );
  });

  return (
    <div className="container-fluid o-background-container c-trending">
      <div className="container">
        <div className="row">
          <div className="col c-trending__section-title">Trending Today</div>
        </div>
        <div className="row c-trending__content">
          <div className="col col--sm-4 u-position-relative c-trending--top-trending">
            {trendingGrid[0]}
          </div>
          <div className="col col--sm-8 c-trending__poster-grid">
            {trendingGrid.slice(1)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
