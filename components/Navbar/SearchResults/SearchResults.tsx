import { MediaContent } from '@utilities/interfacesApp';
import React from 'react';
import PlaceholderPoster from '@public/img/placeholder_poster.png';
import { imgURL, posterSize } from '@utilities/resources';
import Image from 'next/image';

interface SearchResultProps {
  results: MediaContent[];
}

function Search({ results }: SearchResultProps) {
  return (
    <div className="container-fluid c-search-results">
      <div className="container u-height-100%">
        <div className="row u-height-100%">
          <div className="col c-search-results__result-grid">
            {results.slice(0, 12).map((result) => (
              <div className="c-search-results__grid-cell" key={result.id}>
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
                <div className="c-search-results__grid-cell__title">{result.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
