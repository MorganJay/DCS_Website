import Image from 'next/image';

import { teachers } from './Data';

import './Teachers.css';

const Teachers = () => (
  <div className="teachers py-5 mb-5" id="teachers">
    <div className="container">
      <div className="title py-5 text-md-start text-center">
        <h4 className="sub-title text-capitalize">
          our <span>teachers</span>
        </h4>
      </div>
      <div className="row align-items-center">
        {teachers.map((item, index) => (
          <div className="c col-12 col-lg-3 col-md-6" key={index}>
            <div className="card mb-4 shadow position-relative">
              <div className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="accounts">
                  <a
                    href="https://www.facebook.com/"
                    className="p-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    className="p-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="p-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <Image
                className="card-img-top"
                alt="test"
                src={item.img.default}
              />
              <div className="card-footer text-center">
                <h5 className="profile-name text-capitalize">{item.name}</h5>
                <h6 className="text-capitalize text-muted mb-3 material">
                  {item.material}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Teachers;
