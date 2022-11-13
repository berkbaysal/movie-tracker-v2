import Image from 'next/image';
import React from 'react';
import Button from './elements/Button';
import SearchBar from './elements/SearchBar';
import Logo from '../assets/img/logo.svg';

function Navbar() {
  return (
    <div className="container-fluid c-navbar">
      <div className="container u-padding-none u-display-flex">
        <Image src={Logo} alt="logo" className="c-navbar__logo" />
        <div className="c-navbar__menu">
          <SearchBar />
          <Button>Log In</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
