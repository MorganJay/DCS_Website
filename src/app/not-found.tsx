import Link from 'next/link';
import Image from 'next/image';

import notfound from '/public/images/notfound/notfound.svg';

import './styles/not-found/Notfound.css';

const NotFound = () => {
  return (
    <div className="notfound py-5 mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="c col-lg-7 col-12">
            <div className="text mb-lg-0 mb-5 text-lg-start text-center">
              <h4 className="text-error text-capitalize mb-3">
                page not found
              </h4>
              <p className="text-desc text-capitalize mb-lg-3 mb-5 text-muted">
                this page which you are trying to reach is not found. if you are
                having any issues feel free to send us your problem, and we will
                be happy to fix it as soon as we can
              </p>
              <Link
                className="btn btn-outline-danger text-capitalize"
                href="/contact"
              >
                contact us <i className="ms-2 fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
          <div className="c col-lg-5 col-12">
            <div className="img text-center text-lg-end">
              <Image className="img-fluid w-75" src={notfound} alt="error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
