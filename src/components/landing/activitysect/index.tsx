import Image from 'next/image';
import { categories } from './Data';

import './Materials.css';

const ActivitySect = () => (
  <div className="materials py-5 my-5" id="materials">
    <div className="container">
      <div className="title py-5 text-center">
        <h4 className="sub-title text-capitalize">
          Our <span>Activity</span>
        </h4>
      </div>
      <div className="row justify-content-lg-between justify-content-center">
        {categories.map((item, index) => (
          <div
            className="c col-12 col-lg-2 col-md-3 text-center"
            key={Math.random()}
          >
            <div className={`i item${index} rounded mb-lg-0 mb-5`}>
              <Image
                className="img mb-4"
                src={item.img.default}
                alt={item.name}
              />
              <h5 className="sub-title text-capitalize">{item.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ActivitySect;