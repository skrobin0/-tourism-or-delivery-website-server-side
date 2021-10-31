import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import useAuth from '../../Hooks/useAuth';
import Menu from '../../Top Section/Menu/Menu';

const MyOrder = () => {
    const [myorder, setMyOrder] = useState([]);
    const {users} = useAuth();

    useEffect(() => {
        fetch(`https://eerie-goblin-56766.herokuapp.com/order/${users?.email}`)
        .then(res => res.json())
        .then(data => setMyOrder(data))
    }, [users.email]);
    console.log(myorder);

    const myDelete = id => {
         
        fetch(`https://eerie-goblin-56766.herokuapp.com/order/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Delete Done')
                const total = myorder.filter(data => data._id !==id);
                setMyOrder(total);
            }
            
        } )
    }

    return (
        <div>
            <Menu></Menu>
            <h1>My Order : {myorder.length}</h1>
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
                {myorder.map((data, index) => (
                <tbody>
                    <tr>
                    <th scope="row">{index}</th>
                    <td>{users.displayName}</td>
                    <td>{users.email}</td>
                    <td>{data.PlaceName}</td>
                    <button onClick = {() => myDelete(data._id)} className="btn btn-danger">Remove</button>
                    </tr>
                </tbody>
                ))}
            </table>
           <div className='fixed-bottom'>
           
               </div> 
               <div className='fixed-bottom'>
                    <Footer></Footer>
               </div>
        </div>
    );
};

export default MyOrder;