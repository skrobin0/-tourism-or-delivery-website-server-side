import React, { useEffect, useState } from 'react';
import Menu from '../../Top Section/Menu/Menu';

const TourManage = () => {

    const [manage, setManage] = useState([]);


    useEffect(() => {
        fetch('https://eerie-goblin-56766.herokuapp.com/details')
        .then(res => res.json())
        .then(data=> setManage(data))
    }, [])

    const handleDelete = id => {
         
        fetch(`https://eerie-goblin-56766.herokuapp.com/details/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Delete Done')
                const total = manage.filter(data => data._id !==id);
                setManage(total);
            }
            
        } )
    }
    return (
        <div>
            <Menu></Menu>
            <h1>my tour {manage.length}</h1>

            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {manage.map((data, index) => (
                <tbody>
                    <tr>
                    <th scope="row">{index}</th>
                    <td>{data.name}</td>
                    <td>Otto</td>
                    <td>{}</td>
                    <button onClick = {() => handleDelete(data._id)} className="btn btn-danger">Remove</button>
                    </tr>
                </tbody>
                ))}
            </table>

        </div>
    );
};

export default TourManage;