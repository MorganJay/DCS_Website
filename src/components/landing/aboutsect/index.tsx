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
                Divine Community Services is a dynamic and community-driven
                organization based in Purfleet. Our primary objective is to
                address the needs of our local community by providing essential
                services and support to families.
              </p>
              <h3 className="sub-title text-muted text-capitalize">Mission </h3>
              <p className="desc pb-3">
                To empower families and strengthen our community by offering
                comprehensive services that enhance the well-being and
                development of children.
              </p>
              <h3 className="sub-title text-muted text-capitalize">Vision </h3>
              <p className="desc pb-3">
                To create a vibrant and inclusive community where every
                individual, regardless of background or circumstance, has the
                opportunity to thrive and reach their full potential. We
                envision a future where families are supported, children are
                nurtured, and community bonds are strengthened through
                collaboration and empowerment.
              </p>
              <h3 className="sub-title text-muted text-capitalize">Values </h3>
              <p className="desc pb-3">
                Commitment to client satisfaction Dedication to quality service
                delivery Emphasis on community collaboration and support Focus
                on nurturing children's talents and potential
              </p>
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
