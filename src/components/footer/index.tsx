import Link from 'next/link';

import { accounts } from './Data';
import { navbar_items } from '../navbar/Data';

import './Footer.css';

const elements = ['', 'materials', 'stats', 'testimonials', 'faq'];

const Footer = () => {
  return (
    <div className="_footer">
      <footer className="footer py-3 pb-4">
        <div className="container">
          <div className="footer-top py-3 mb-4 d-flex justify-content-center">
            {accounts.map((item, index) => (
              <div
                className={`a account-${index} mx-2 px-2 py-1 rounded-circle shadow-lg`}
                key={Math.random()}
              >
                <a
                  className="text-center"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={item.icon}></i>
                </a>
              </div>
            ))}
          </div>
          <div className="row mb-4">
            <div className="c col-lg-4 col-md-6 col-12">
              <div className="s mb-3 mb-md-0">
                <h6 className="footer-title mb-3">OpenSchool</h6>
                <p className="footer-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
                <h6 className="footer-e-mail text-muted">
                  <i className="fas fa-envelope me-2"></i>openschool@support.com
                </h6>
              </div>
            </div>
            <div className="c col-lg-4 col-md-3 col-12">
              <div className="s mb-3 mb-md-0 text-center">
                <h6 className="link text-capitalize mb-3">quick links</h6>
                <div className="links">
                  {navbar_items.map(item => (
                    <Link
                      className="d-block mb-2 text-muted text-capitalize"
                      href={`/${item.name === '' ? '' : item.name}`}
                      key={Math.random()}
                    >
                      {item.name === '' ? 'home' : item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="c col-lg-4 col-md-3 col-12">
              <div className="s mb-3 mb-md-0 text-center">
                <h6 className="link text-capitalize mb-3">useful links</h6>
                <div className="links">
                  {elements.map((item, index) => (
                    <a
                      className="d-block mb-2 text-muted text-capitalize"
                      href={`#${item}`}
                      key={index}
                    >
                      {item === '' ? 'Hero' : item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights text-center">
            <p className="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.{' '}
              <Link href="/">OpenSchool</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
