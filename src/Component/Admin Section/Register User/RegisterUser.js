import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import useAuth from '../../Hooks/useAuth';
import Menu from '../../Top Section/Menu/Menu';

const RegisterUser = () => {

    const {users} =useAuth();

    const [register, setRegister] = useState([]);

    useEffect(() => {
        fetch('https://eerie-goblin-56766.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setRegister(data))
    }, [])


    const hdDelete = id => {
         
        fetch(`https://eerie-goblin-56766.herokuapp.com/order/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Delete Done')
                const total = register.filter(data => data._id !==id);
                setRegister(total);
            }
            
        } )
    }

    return (
        <div>
            <Menu></Menu>
            <h1> Total Order Added : {register.length}</h1>

            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Place</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {register.map((data, index) => (
                <tbody>
                    <tr>
                    <th scope="row">{index}</th>
                    <td>{users.displayName}</td>
                    <td>{users.email}</td>
                    <td>{data?.PlaceName}</td>
                    <button onClick = {() => hdDelete(data._id)} className="btn btn-danger">Remove</button>
                    </tr>
                </tbody>
                ))}
            </table>
           <div className='fixed-bottom'>
           <Footer></Footer>
               </div> 
        </div>
    );
};

export default RegisterUser;