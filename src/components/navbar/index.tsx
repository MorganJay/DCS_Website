'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { navbar_items } from './Data';

import Logo from '/public/images/landing/DCS-Logo.jpeg';

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
        <Link className="navbar-brand d-flex justify-content-center gap-2" href="/">
          <Image src={Logo} alt="DCS Logo" width={70} />
          <div>
            Divine Community Services <br />
            <p>Learning and Resource Centre</p>
          </div>
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
