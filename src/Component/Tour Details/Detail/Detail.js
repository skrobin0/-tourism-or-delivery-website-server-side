import React from 'react';
import'./Detail.css'
import { Link } from 'react-router-dom';

const Detail = ({detail}) => {

    const {name, sit, img, _id, description} = detail;


    return (
        <>
                    <div className="col-md-4 col-sm-12">
                     <div className="card">
                        <img src={img} class="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h4 className="card-text">Total sit :{sit}</h4>
                        <p className="card-text">{description.slice(0, 75)}</p>
                        <Link to={`/singletour/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                        </Link>
                        </div>
                    </div>
             </div>
        </>
    );
};

export default Detail;












