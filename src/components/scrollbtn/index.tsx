'use client';
import { useEffect, useState } from 'react';

import './Sb.css';

const ScrollButton = () => {
  const [show, setShow] = useState(true);

  const checkScroll = () => {
    window.scrollY >= 200 ? setShow(true) : setShow(false);
  };

  const handleClick = () => window.scroll(0, 0);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    document.addEventListener('DOMContentLoaded', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      document.removeEventListener('DOMContentLoaded', checkScroll);
    };
  }, []);

  return (
    <button
    className={`btn rounded-circle btn-sm position-fixed ${
        show ? 'd-block' : 'd-none'
      }`}
      id="btn-up"
      onClick={handleClick}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollButton;
