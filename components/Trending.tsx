import React from 'react';
import { MovieListResult, TVListResult } from '../static/interfaces';
import TrendingUnit from './elements/TrendingUnit';

interface TrendingProps {
  trending: (MovieListResult | TVListResult)[];
}

function Trending({ trending }: TrendingProps) {
  const trendingGrid = trending.map((item) => {
    const title = item.media_type === 'movie' ? item.title : item.original_name;
    return (
      <TrendingUnit title={title} posterPath={item.poster_path} key={title} />
    );
  });

  return (
    <div className="container-fluid o-background-container c-trending">
      <div className="container">
        <div className="row">
          <div className="col c-trending__section-title">Trending Today</div>
        </div>
        <div className="row c-trending__poster-grid">
          <div className="col col--sm-4 u-position-relative c-trending--top-trending">
            {trendingGrid[0]}
          </div>
          <div className="col col--sm-8">
            <div className="row">
              {trendingGrid.slice(1, 5).map((trendingUnit) => (
                <div className="col col--sm-3">{trendingUnit}</div>
              ))}
            </div>
            <div className="row u-padding-top-xsmall">
              {trendingGrid.slice(5).map((trendingUnit) => (
                <div className="col col--sm-3">{trendingUnit}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
