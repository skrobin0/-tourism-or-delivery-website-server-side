import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import Menu from '../Top Section/Menu/Menu';

const ToursAdd = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    console.log(data);


    axios.post('https://eerie-goblin-56766.herokuapp.com/details', data)
    .then(res => {
      // console.log(res);
      if(res.data.insertedId){
        alert('Tour added successfully');
        reset();
       }
      } )
    }

    return (
        <div>
          <Menu></Menu>
                   <h1 className="mt-5 text-center text-warning">Please Add Tours</h1>
                <div className="login-box ">
                  <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("place name")}
                          placeholder="Place Name"
                          className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                          {...register("price")}
                          placeholder="Price"
                          type="number"
                          className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                          {...register("description")}
                          placeholder="Description"

                          className="p-2 m-2 w-100"
                        />
                        <br />

                        <input
                          {...register("image", { required: true })}
                          placeholder="Image url"
                          className="p-2 m-2 w-100"
                        />
                        <br />

                        <input type="submit" value="Confirm" className="btn btn-warning w-50 mb-2" />
                      </form>

                    </div>
                  </div>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default ToursAdd;