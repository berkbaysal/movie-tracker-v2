import { MediaContent, MediaType } from '@utilities/interfacesApp';
import React from 'react';
import PlaceholderPoster from '@public/img/placeholder_poster.png';
import { imgURL, posterSize } from '@utilities/resources';
import Image from 'next/image';
import Link from 'next/link';

interface SearchResultProps {
  results: MediaContent[];
  isVisible: boolean;
}

function getMediaTypeString(mediaType: MediaType): string {
  switch (mediaType) {
    case 'movie':
      return 'Movie';
    case 'tv':
      return 'TV Show';
    case 'person':
      return 'Person';
    default:
      return '';
  }
}

function Search({ results, isVisible }: SearchResultProps) {
  return (
    <div
      className={`container-fluid c-search-results ${
        isVisible ? 'c-search-results--visible' : 'c-search-results--hidden'
      }`}
    >
      <div className="container u-height-100%">
        <div className="row u-height-100%">
          <div className="col c-search-results__result-grid">
            {results.map((result) => (
              <Link className="c-search-results__grid-cell" key={result.id} href={`/${result.mediaType}/${result.id}`}>
                <div className="c-search-results__poster-wrapper">
                  <Image
                    src={
                      result.posterPath ? `${imgURL}/${posterSize.small.url}${result.posterPath}` : PlaceholderPoster
                    }
                    alt={result.title}
                    fill
                    className="c-search-results__grid-cell__image"
                  />
                </div>
                <div className="c-search-results__info-wrapper">
                  <div className="c-search-results__media-type-indicator">
                    <div className="c-search-results__media-type">{getMediaTypeString(result.mediaType)}</div>
                  </div>
                  <div className="c-search-results__title">{result.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
