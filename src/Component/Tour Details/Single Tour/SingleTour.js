import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Footer from '../../Footer/Footer';
import useAuth from '../../Hooks/useAuth';
import Menu from '../../Top Section/Menu/Menu';

const SingleTour = () => {
    const {serviceId} = useParams();
    
    const[tour, setTour] = useState({})
    const {reset} = useForm();

    useEffect( () =>{
        fetch(`https://eerie-goblin-56766.herokuapp.com/details/${serviceId}`)
        .then(res => res.json())
        .then(data => setTour(data))
    } , [])


    const {users} = useAuth();

        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm();
        
          const onSubmit = (data) => {
            fetch("https://eerie-goblin-56766.herokuapp.com/order", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((result) =>               
              console.log(result));
              
            console.log(data);
            
            
          };

    return (
        <div>
           <Menu></Menu>
        <div className="container-fluid row mt-3 details-container">
          <div className="col-md-6 col-sm-12">
            <div class="card mb-3 m-auto">
              <img src={tour.img} class="card-img-top img-thumbnail" alt="..." />
              <div class="card-body">
                <h3 class="card-title text-center">{tour.name}</h3>
                <p class="card-text">{tour.description}</p>
                <h4 class="card-text text-center">
                  Participants: {tour.sit}
                </h4>
              </div>
            </div>
          </div>

      {/* place order part */}
      <div className="col-md-6 col-sm-12 order-form">
      <h1 className="mt-5 text-center text-warning">
         Please Confirm Your Booking
           </h1>
      <div className=" ">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              { tour.name &&
                <input
                defaultValue={tour?.name}
                {...register("PlaceName")}
                placeholder="Name"
                className="p-2 m-2"
              />
              }
              <br />

              { users.displayName &&
                <input
                defaultValue={users?.displayName}
                {...register("Uname")}
                placeholder="Name"
                className="p-2 m-2"
              />
              }
              <br />

              <input
                value={users.email}
                {...register("email", { required: true })}
                placeholder="Email"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("date", { required: true })}
                placeholder="date"
                defaultValue={new Date()}
                className="p-2 m-2"
              />
              <br />
              <input
                value={tour.cost}
                {...register("price", { required: true })}
                placeholder="Price"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("location", { required: true })}
                placeholder="Location"
                className="p-2 m-2"
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="btn btn-warning w-50 " />
            </form>
          </div>
        </div>
      </div>

      </div>
    </div>
            
            <Footer></Footer>
        </div>
    );
};

export default SingleTour;










