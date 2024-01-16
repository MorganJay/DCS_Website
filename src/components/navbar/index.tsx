'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { navbar_items } from './Data';

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
      className={`navbar navbar-expand-lg navbar-light text-dark fixed-top ${
        showShadow ? 'shadow-lg' : 'shadow'
      }`}
    >
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {navbar_items.map(item => (
              <li className="nav-item me-lg-3 my-lg-0 my-2" key={Math.random()}>
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
