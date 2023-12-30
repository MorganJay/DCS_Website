import Link from 'next/link';
import Image from 'next/image';


import { section3 } from '@/components/blogs/sections/Data.js';

import '../../blogs/sections/Sections.css';
import './Rs.css';

const RecentBlogs = () => (
  <div className="sections blogs _rs py-5 mb-5">
    <div className="container">
      <div className="container">
        <div className="title py-5 text-md-start text-center">
          <h4 className="sub-title text-capitalize">
            recent <span>blogs</span>
          </h4>
        </div>
        <div className="_s row justify-content-start">
          {section3.map((item, index) => (
            <div className="c col-lg-3 col-md-6 col-12" key={index}>
              <div className="card mx-auto shadow-lg mb-5" key={index}>
                <Image
                  className="img-fluid mb-3"
                  src={item.default}
                  alt={`blog number ${index}`}
                />
                <div className="card-body p-4">
                  <h5 className="card-img-top card-title mb-">
                    Sed ut perspiciatis unde omnis iste
                  </h5>
                  <p className="card-text mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua...
                  </p>
                  <div className="_footer d-flex flex-wrap justify-content-between align-items-center">
                    <button className="btn btn-danger text-capitalize mb-3 btn-sm">
                      read more <i className="fas fa-chevron-right ms-2"></i>
                    </button>
                    <p className="date text-muted ">November 30, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="rs text-center">
            <Link className="blogs text-capitalize" href="/blogs">
              see all blogs of ours <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecentBlogs;
