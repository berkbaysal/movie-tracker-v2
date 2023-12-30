'use client';

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setResultsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchBar({ query, setQuery, setResultsVisible = () => {} }: SearchBarProps) {
  return (
    <div className="c-search-bar">
      <input
        className="c-search-bar__input-field u-display-none@sm-down"
        placeholder="Search..."
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => {
          setResultsVisible(true);
        }}
        onBlur={() => setResultsVisible(false)}
      />
      <AiOutlineSearch className="c-search-bar__search-icon u-display-none@md-up" role="button" />
    </div>
  );
}

export default SearchBar;
