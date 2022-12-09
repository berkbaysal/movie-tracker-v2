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
            {/* Scroll to top */}
            <div className="c-footer__links-top-row">
              <a className="c-footer__scroll-to-top" href="#top">
                Back to Top
                <span className="c-footer__scroll-to-top-icon">▲</span>
              </a>
            </div>
            {/* Social media icons */}
            <div className="c-footer__links-bottom-row">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram className="c-footer__social-media-icon" />
                <span className="u-visually-hidden">Instagram</span>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter className="c-footer__social-media-icon" />
                <span className="u-visually-hidden">Twitter</span>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube className="c-footer__social-media-icon" />
                <span className="u-visually-hidden">Youtube</span>
              </a>
            </div>
          </div>
          {/* Info Text with API link */}
          <div className="c-footer__info">
            The Movie Tracker
            <br />
            Powered by{' '}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* TO-DO: This link on non-mobie sizes has an unintuitive order for tab focus. This is caused by reverse-flex display on desktop. Bringing its tab order to be before social media icons for desktop only will improve natural flow of tabbing. */}
              themoviedb.org
            </a>{' '}
            API
          </div>
          {/* Logo */}
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
