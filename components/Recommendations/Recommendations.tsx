import { MovieListResult } from '@utilities/interfacesAPI';
import React from 'react';
import RecommendationUnit from './RecommendationUnit/RecommendationUnit';

interface IRecommendationsProps {
  recommendations: MovieListResult[];
}

function Recommendations({ recommendations }: IRecommendationsProps) {
  return (
    <section aria-label="Recommendations" className="container-fluid o-background-container">
      <div className="container">
        <div className="c-recommendations">
          <RecommendationUnit content={recommendations[0]} />
          <RecommendationUnit content={recommendations[1]} />
          <RecommendationUnit content={recommendations[2]} />
          <RecommendationUnit content={recommendations[3]} />
          <RecommendationUnit content={recommendations[4]} />
          <RecommendationUnit content={recommendations[5]} />
        </div>
      </div>
    </section>
  );
}

export default Recommendations;
