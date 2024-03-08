import Link from 'next/link';
import Image from 'next/image';

import hero from '/public/images/sections/hero.svg';

import './Hero.css';

const Hero = () => {
  return (
    <div className="hero py-5 mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="c col-lg-6 col-12">
            <div className="left-side mb-lg-0 mb-5 text-lg-start text-center">
              <h3 className="title text-capitalize">
              Empowering Our Community, One Family at a Time!
              </h3>
              <p className="sub-title text-muted text-capitalize">
              Welcome to Divine Community Services
              </p>
              <p className="desc pb-3">
              At Divine Community Services, we believe in building a stronger, more supportive community right here in Purfleet. Our dedicated team is committed to providing essential services tailored to the needs of local families. From school runs to childcare, pre-school programs to after-school activities, and engaging holiday events, we're here to make life easier for parents and more enriching for children.
              </p>
              <div className="buttons">
                <Link
                  className="btn text-capitalize me-3 shadow"
                  href="/about"
                >
                  read more<i className="ms-2 fas fa-chevron-right"></i>
                </Link>
                <Link
                  className="btn btn-outline-danger text-capitalize shadow"
                  href="/contact"
                >
                  get in touch<i className="ms-2 fas fa-envelope"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="c col-lg-6 col-12">
            <div className="right-side text-lg-end text-center">
              <Image
                className="w-75 img-fluid"
                src={hero}
                alt="hero"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
