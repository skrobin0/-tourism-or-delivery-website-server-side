import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <div className="footer-container">
        <div className="container">
        <div className="row">
        <div className="col-md-5 col-sm-12">
        <div className="left-container text-start">
                <h1>Greninja Travel Group </h1>
              
                <p className="mt-4 ">
                  <small>
                    These statements have not been evaluated by the Food and
                    Drug Administration. These products are not intended to
                    diagnose.
                  </small>
                </p>

                <p className="mt-5">
                  <small> ©  All rights reserved.</small>
                </p>
          </div>
          </div>
          <div className="col-md-2 col-sm-12">
          <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Details</li>
                  <li className="footer-menu">Event</li>
                  <li className="footer-menu">Login</li>
                  <li className="footer-menu"> Contact us</li>
                </ul>
          </div>
          </div>
          <div className="col-md-5 col-sm-12">
          <div className="right-footer-container">
                <h3>Sign up for details</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder=""/>
          <div className="phone d-flex align-items-center justify-content-center mt-4">
          
          <div>
              <h5>+8 8 01 881 55 55</h5>
          </div>
          </div>
          <div className="map d-flex align-items-center justify-content-center">
          <div>
           <p>
                100 Gulshan, Dhaka
               <br /> 100 1st Avenue, Bangladesh.
           </p>

          </div>
                
          </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
};

export default Footer;