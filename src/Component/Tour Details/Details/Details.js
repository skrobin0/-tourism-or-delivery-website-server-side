import React,  { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import './Details.css'

const Details = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://eerie-goblin-56766.herokuapp.com/details')
        .then(res=> res.json())
        .then(data=>setDetails(data))
    }, []);

    if (details.length === 0) {
        return (
          <div class="text-center m-5">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        );
      }

    return (
        <>
             <div className="container">
             
             <div className ="mt-3"> <h1>^^Upcoming Event^^</h1> </div>
             <div className="row g-4 card-group p-3">
             {
                 details.map(detail => <Detail
                    key = {detail.key}
                    detail = {detail}
                 ></Detail>    
                 )
             }
             </div>
         </div>
        </>
    );
};

export default Details;












