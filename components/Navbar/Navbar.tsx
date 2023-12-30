'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@elements';
import { MediaContent } from '@utilities/interfacesApp';
import { usePathname } from 'next/navigation';
import Logo from '@public/img/logo.svg';
import Link from 'next/link';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function Navbar() {
  const [query, setQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchResults, setSearchResults] = useState<MediaContent[]>([]);

  const pathName = usePathname();

  useEffect(() => {
    axios
      .get(`/api/search?query=${query}`)
      .then((res) => {
        setSearchResults(res.data);
      })
      .catch(() => {
        setSearchResults([]);
      });
  }, [query]);

  useEffect(() => {
    setIsSearchVisible(false);
    setQuery('');
  }, [pathName]);

  return (
    <nav className="container-fluid o-background-container c-navbar">
      <div className="c-navbar__overlay" />
      <div className="container c-navbar__container">
        <div className="row">
          <div className="col  u-display-flex">
            <Link href="/">
              <Image src={Logo} alt="Movie tracker logo" className="c-navbar__logo" />
            </Link>
            <div className="c-navbar__menu">
              <SearchBar query={query} setQuery={setQuery} setResultsVisible={setIsSearchVisible} />
              <Button label="Log In" role="link" />
            </div>
          </div>
        </div>
      </div>
      <SearchResults results={searchResults} isVisible={isSearchVisible} />
    </nav>
  );
}

export default Navbar;
