import Link from 'next/link';
import Image from 'next/image';

import aboutsect from '/public/images/sections/hero.svg';


import './AboutSect.css';

const AboutSect = () => {
  return (
    <div className="aboutsect py-5 mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="c col-lg-6 col-12">
            <div className="left-side mb-lg-0 mb-5 text-lg-start text-center">
              <h3 className="title text-capitalize">
                About Us 
                {/* <span>DCS Learning & Resource Centre</span> ! */}
              </h3>
              <p className="desc pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <p className="sub-title text-muted text-capitalize">Mission </p>
              <p className="desc pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <p className="sub-title text-muted text-capitalize">Vision </p>
              <p className="desc pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <p className="sub-title text-muted text-capitalize">Value </p>
              <p className="desc pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className="buttons">
                <Link
                  className="btn btn-danger text-capitalize me-3 shadow"
                  href="/about"
                >
                  read more<i className="ms-2 fas fa-chevron-right"></i>
                </Link>
                {/* <Link
                  className="btn btn-outline-danger text-capitalize shadow"
                  href="/contact"
                >
                  get in touch<i className="ms-2 fas fa-envelope"></i>
                </Link> */}
              </div>
            </div>
          </div>

          <div className="c col-lg-6 col-12">
            <div className="right-side text-lg-end text-center">
              {/* <Image
                className="w-75 img-fluid"
                src={aboutsect}
                alt="aboutsect"
                priority
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSect;
