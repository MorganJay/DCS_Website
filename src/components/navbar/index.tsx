'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  ENTITY_PHONE,
  ENTITY_ADDRESS,
  NAVBAR_ITEMS,
  SOCIAL_ACCOUNTS_LIST,
  ENTITY_ADDRESS_MAP,
} from '@/assets/website-data';

import './Navbar.css';

const Navbar = () => {
  const [showShadow, setShowShadow] = useState(false);

  const addShadow = () =>
    window.scrollY >= 80 ? setShowShadow(true) : setShowShadow(false);

  useEffect(() => {
    const handleScroll = () => {
      addShadow();
    };

    window.addEventListener('scroll', handleScroll);

    document.addEventListener('DOMContentLoaded', addShadow);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('DOMContentLoaded', addShadow);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light text-dark fixed-top d-flex flex-column ${
        showShadow ? 'shadow-lg' : 'shadow'
      }`}
    >
      <div className="container px-4 d-flex justify-content-end align-items-center text-white">
        <div className="d-flex justify-content-end align-items-center">
          <div className="d-none d-md-block text-white text-decoration-none">
            <a
              href={`tel:${ENTITY_PHONE}`}
              className="text-white text-decoration-none mx-3"
            >
              <i className="fas fa-phone-alt mx-2"></i>
              {ENTITY_PHONE}
            </a>
            <a
              href={`${ENTITY_ADDRESS_MAP}`}
              target="_blank"
              className="text-white text-decoration-none mx-2"
              // <a href="http://www.myurltest.com" target="_blank"
            >
              <i className="fas fa-map-marker-alt mx-2"></i>
              {ENTITY_ADDRESS}
            </a>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            {SOCIAL_ACCOUNTS_LIST.map((item, index) => (
              <div
                className={`a account-${index} mx-1 px-2 py-1 rounded-circle shadow-lg`}
                key={item.id}
              >
                <a
                  className="text-center text-white"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={item.icon}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container py-2">
        <Link className="navbar-brand" href="/">
          <i className="fas fa-school me-2"></i>
          <span>DCS</span> Learning Centre
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {NAVBAR_ITEMS.map(item => (
              <li className="nav-item me-lg-3 my-lg-0 my-2" key={item.id}>
                <Link
                  className="nav-link text-capitalize position-relative hover"
                  href={`/${item.path}`}
                >
                  <i className={`${item.icon} me-2`}></i>
                  {item.name === '' ? 'home' : item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
