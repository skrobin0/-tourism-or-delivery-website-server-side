import React from 'react';

const Achievement = () => {
    return (
        <div className="container-fluid bg-info p-5 m-auto text-center text-white">
      <h2 className="mb-5 text-center">
        <i class="fas fa-2x fa-draw-polygon"></i> Achievement <br />{" "}
        <span>We Earned</span>
      </h2>
      <div className="row">
        <div className="col-md-3 p-3">
          <h2>
            <i class="fas fa-2x fa-hotel"></i> 70
          </h2>
          <p className="fs-5">Total Tour</p>
        </div>
        <div className="col-md-3 p-3">
          <h2>
          <i class="fas fa-2x fa-users-cog"></i> 10
          </h2>
          <p className="fs-5">Admin Panal</p>
        </div>
        <div className="col-md-3 p-3">
          <h2>
          <i class="fas fa-2x fa-laugh-wink"></i> 6050
          </h2>
          <p className="fs-5">Tour Member</p>
        </div>
        <div className="col-md-3 p-3">
          <h2>
          <i class="fas fa-2x fa-clipboard-check"></i> 17
          </h2>
          <p className="fs-5">Successful Event</p>
        </div>
      </div>
    </div>
            
        
    );
};

export default Achievement;