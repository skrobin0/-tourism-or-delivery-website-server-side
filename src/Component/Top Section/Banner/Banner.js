import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container mb-5">
          <div className="banner">
           <div className="row d-flex banner align-items-center justify-content-center">
          
           <div className="col-md-6">
          <h1 className="title">
           Fly As Much As <br /> You Can
          </h1>
          <p className="ttf text-white text-center mt-3 p-2">
          Explore The World With Us.
          </p>
          <button className="mt-3 about-btn">About Us</button>
            </div>
           <div className="col-md-6"></div>
          </div>
         </div>
        </div>
      );
    };

export default Banner;