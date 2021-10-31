import React from 'react';
import Menu from '../Top Section/Menu/Menu';
import './Contact'

const Contact = () => {
    return (
        <div>
            <div>
                <Menu></Menu>
            </div>
            <div className="col-md-6 col-sm-10 mx-auto ">
            <h1> Contact Info </h1>
            <p>
            We denounce with righteous indignation in and dislike men who are so beguiled and to demo realized by the charms of pleasure moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.
            <br/>
            <br/>
            374 kawran bazar, Dhaka, BANGLADESH
            (+880)173-97531045
            info@GreninjaInstitute.com
            </p>
            </div>
           
        <div className ="mm col-md-6 col-sm-10 mx-auto">


        <form className="row g-3">
  <div className="col-md-4 col-sm-10">
    <label htmlFor="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" value="" required/>
  </div>
  <div className="col-md-4 col-sm-10">
    <label htmlFor="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" value="" required/>
  </div>
  <div className="col-md-4 col-sm-10">
    <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div className="col-md-6 col-sm-10">
    <label htmlFor="validationDefault03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>
  <div className="col-md- col-sm-10">
    <label htmlFor="validationDefault04" className="form-label">Course</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3 col-sm-10">
    <label htmlFor="validationDefault05" className="form-label">Number</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" htmlFor="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
 </form>
 
     </div> 
        </div>
    );
};

export default Contact;