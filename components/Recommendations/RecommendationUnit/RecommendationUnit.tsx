import { MovieListResult, TVListResult } from '@utilities/interfacesAPI';
import { imgURL, posterSize } from '@utilities/resources';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IRecommendationUnitProps {
  content: MovieListResult | TVListResult;
}

function RecommendationUnit({ content }: IRecommendationUnitProps) {
  const sizes = '(max-width: 760px) 33vw, 17vw';

  return (
    <Link href={`/${content.media_type}/${content.id}`}>
      <div className="c-recommendation-unit">
        <Image
          className="c-recommendation-unit__poster"
          src={`${imgURL}/${posterSize.medium.url}${content.poster_path}`}
          alt={`${content.title} poster`}
          sizes={sizes}
          width={posterSize.medium.width}
          height={posterSize.medium.height}
          placeholder="empty"
        />
        <h3 className="c-recommendation-unit__title">{`${content.title}`}</h3>
      </div>
    </Link>
  );
}

export default RecommendationUnit;
