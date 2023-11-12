import { MediaContent } from '@utilities/interfacesApp';
import { imgURL, posterSize } from '@utilities/resources';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IRecommendationUnitProps {
  reccomendation: MediaContent;
}

function RecommendationUnit({ reccomendation }: IRecommendationUnitProps) {
  const sizes = '(max-width: 760px) 33vw, 17vw';

  return (
    <Link href={`/${reccomendation.mediaType}/${reccomendation.id}`}>
      <div className="c-recommendation-unit">
        <Image
          className="c-recommendation-unit__poster"
          src={`${imgURL}/${posterSize.medium.url}${reccomendation.posterPath}`}
          alt={`${reccomendation.title} poster`}
          sizes={sizes}
          width={posterSize.medium.width}
          height={posterSize.medium.height}
          placeholder="empty"
        />
        <h3 className="c-recommendation-unit__title">{`${reccomendation.title}`}</h3>
      </div>
    </Link>
  );
}

export default RecommendationUnit;
