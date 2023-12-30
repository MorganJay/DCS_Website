import Image from 'next/image';

import { section1 } from './Data';
import './Section1.css';

const Section1 = () => {
  return (
    <div className="s1 py-5">
      <div className="container">
        <div className="d d-flex flex-wrap justify-content-center">
          {section1.map((item, index) => {
            return (
              <div
                className="b mb-5 text-center p-3 shadow rounded mx-2"
                key={index}
              >
                <Image
                  className="img-fluid mb-3"
                  src={item.default}
                  alt="cource"
                />
                <p className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button className="btn btn-outline-danger btn-sm text-capitalize">
                  read more <i className="ms-2 fas fa-chevron-right"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section1;
