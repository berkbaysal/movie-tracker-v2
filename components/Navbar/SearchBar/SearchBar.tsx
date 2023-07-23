'use client';

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
  const [input, setInput] = useState<string>('');

  return (
    <div className="c-search-bar">
      <input
        className="c-search-bar__input-field u-display-none@sm-down"
        placeholder="Search..."
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <AiOutlineSearch className="c-search-bar__search-icon u-display-none@md-up" role="button" />
    </div>
  );
}

export default SearchBar;
