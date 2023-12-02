import Image from 'next/image';
import React from 'react';
import { Button } from '@elements';
import Logo from '@public/img/logo.svg';
import Link from 'next/link';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function Navbar() {
  return (
    <nav className="container-fluid o-background-container c-navbar">
      <div className="container c-navbar__container">
        <div className="row">
          <div className="col  u-display-flex">
            <Link href="/">
              <Image src={Logo} alt="Movie tracker logo" className="c-navbar__logo" />
            </Link>
            <div className="c-navbar__menu">
              <SearchBar />
              <Button label="Log In" role="link" />
            </div>
          </div>
        </div>
      </div>
      <SearchResults />
    </nav>
  );
}

export default Navbar;
