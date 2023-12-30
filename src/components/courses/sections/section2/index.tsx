import Image from 'next/image';

import { section2 } from './Data';
import './Section2.css';

const Section2 = () => (
  <div className="s2 py-5">
    <div className="container">
      <div className="row">
        {section2.map((item, index) => (
          <div className="c col-lg-4 col-md-6 col-12 mb-3" key={index}>
            <div className="card">
              <Image
                className="card-img-top position-relative"
                src={item.default}
                alt="cource"
              />
              <div className="card-body py-3 px-4">
                <div className="top mb-2 d-flex flex-wrap justify-content-between">
                  <h6 className="teacher text-capitalize mb-2">lorem ipsum</h6>
                  <div className="stars">
                    <i className="fas fa-star mx-1"></i>
                    <i className="fas fa-star mx-1"></i>
                    <i className="fas fa-star mx-1"></i>
                    <i className="fas fa-star mx-1"></i>
                  </div>
                </div>
                <p className="desc mb-4 ps-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="bottom d-flex flex-wrap justify-content-between align-items-center">
                  <button className="btn btn-danger text-capitalize btn-sm mb-3">
                    read more
                  </button>
                  <h6 className="type text-capitalize text-muted">
                    accusantium doloremque
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Section2;
