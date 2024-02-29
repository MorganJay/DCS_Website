import Link from 'next/link';

import {
  ENTITY_PHONE,
  ENTITY_ADDRESS,
  ENTITY_EMAIL_ADDRESS,
  ENTITY_NAME,
  SOCIAL_ACCOUNTS_LIST,
  NAVBAR_ITEMS,
  ENTITY_ADDRESS_MAP,
} from '@/assets/website-data';

import './Footer.css';

const elements = ['', 'materials', 'stats', 'testimonials', 'faq'];

const Footer = () => {
  return (
    <footer className="footer py-3 pb-4">
      <div className="container">
        <div className="footer-top py-3 mb-4 d-flex justify-content-center">
          {SOCIAL_ACCOUNTS_LIST.map((item, index) => (
            <div
              className={`a account-${index} mx-2 px-2 py-1 rounded-circle shadow-lg`}
              key={item.id}
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
              <h6 className="footer-title mb-3">{ENTITY_NAME}</h6>
              <p className="footer-text">
                Making a Difference, Building Community & Working Together to
                Create a Better Future
              </p>
              <a href={`tel:${ENTITY_PHONE}`}>
                <p className="footer-text">
                  <i className="fas fa-phone-alt me-2"></i>Tel: {ENTITY_PHONE}
                </p>
              </a>
              <a href={`${ENTITY_ADDRESS_MAP}`} target="_blank">
                <p className="footer-text">
                  <i className="fas fa-map-marker-alt me-2"></i> Address:{' '}
                  {ENTITY_ADDRESS}
                </p>
              </a>

              <a href={`mailto:${ENTITY_EMAIL_ADDRESS}`}>
                <h6 className="footer-e-mail text-muted">
                  <i className="fas fa-envelope me-2"></i>
                  {ENTITY_EMAIL_ADDRESS}
                </h6>
              </a>
            </div>
          </div>
          <div className="c col-lg-4 col-md-3 col-12">
            <div className="s mb-3 mb-md-0 text-center">
              <h6 className="link text-capitalize mb-3">quick links</h6>
              <div className="links">
                {NAVBAR_ITEMS.map(item => (
                  <Link
                    className="d-block mb-2 text-muted text-capitalize"
                    href={`/${item.path}`}
                    key={item.id}
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
            &copy; {new Date().getFullYear()} All rights reserved.{' '}
            <Link href="/">{ENTITY_NAME}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
