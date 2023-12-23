import { MediaContent } from '@utilities/interfacesApp';
import React from 'react';

interface SearchResultProps {
  results: MediaContent[];
}

function Search({ results }: SearchResultProps) {
  return (
    <div className="container-fluid c-search-results">
      <div className="container">
        <div className="row">
          <div className="col">Search</div>
        </div>
      </div>
    </div>
  );
}

export default Search;
