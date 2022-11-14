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
    <div className="container-fluid o-background-container c-trending u-padding-right-none@sm-down">
      <div className="container u-padding-right-none@sm-down">
        <div className="row">
          <div className="col c-trending__section-title">Trending Today</div>
        </div>
        {/* Tablet & Desktop Layout */}
        <div className="row c-trending__content u-display-none@sm-down">
          <div className="col col--sm-4 u-padding-right-2xsmall">
            {trendingGrid[0]}
          </div>
          <div className="col col--sm-8 c-trending__poster-grid u-padding-left-2xsmall">
            {trendingGrid.slice(1)}
          </div>
        </div>
        {/* Moblie Layout */}
        <div className="c-trending__content u-display-none@md-up">
          <div className="c-trending__scrollbox">{trendingGrid}</div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
