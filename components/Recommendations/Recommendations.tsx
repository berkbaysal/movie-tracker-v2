import { MovieListResult } from '@utilities/interfacesAPI';
import React from 'react';
import RecommendationUnit from './RecommendationUnit/RecommendationUnit';

interface IRecommendationsProps {
  recommendations: MovieListResult[];
}

function Recommendations({ recommendations }: IRecommendationsProps) {
  const limitedRecommendations = recommendations.slice(0, 6);

  return (
    <section aria-label="Recommendations" className="container-fluid o-background-container">
      <div className="container">
        <div className="c-recommendations">
          <h2 className="o-detail-page-section-title">Recommendations:</h2>
          <div className="c-recommendations__grid">
            {limitedRecommendations.map((recommendation) => (
              <RecommendationUnit key={recommendation.id} content={recommendation} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recommendations;
