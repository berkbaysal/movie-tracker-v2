import Image from 'next/image';
import React from 'react';
import Button from '../elements/Button/Button';
import SearchBar from '../elements/SearchBar/SearchBar';
import Logo from '../../public/img/logo.svg';

function Navbar() {
  return (
    <nav className="container-fluid o-background-container c-navbar">
      <div className="container">
        <div className="row">
          <div className="col  u-display-flex">
            <Image
              src={Logo}
              alt="Movie tracker logo"
              className="c-navbar__logo"
            />
            <div className="c-navbar__menu">
              <SearchBar />
              <Button label="Log In" role="link" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
