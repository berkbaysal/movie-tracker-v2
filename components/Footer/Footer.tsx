import React from 'react';
import Image from 'next/image';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai';
import Logo from '../../public/img/logo-reverse.svg';

function Footer() {
  return (
    <footer className="c-footer container-fluid o-background-container">
      <div className="container">
        <div className="c-footer__content-wrapper">
          <div className="c-footer__links">
            <a className="c-footer__scroll-to-top" href="#top">
              Back to Top
              <span className="c-footer__scroll-to-top-icon">▲</span>
            </a>
            <div className="c-footer__socials">
              <AiOutlineInstagram className="c-footer__social-media-icon" />
              <AiOutlineTwitter className="c-footer__social-media-icon" />
              <AiFillYoutube className="c-footer__social-media-icon" />
            </div>
          </div>
          <div className="c-footer__info">
            The Movie Tracker
            <br />
            Powered by <a href="https://www.themoviedb.org/">themoviedb.org</a>
            &nbsp;API
          </div>

          <div className="c-footer__logo-wrapper">
            <Image
              src={Logo}
              alt="Movie tracker logo"
              className="c-footer__logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
