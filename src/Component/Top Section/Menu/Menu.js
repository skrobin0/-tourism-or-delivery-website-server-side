import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



import "./Menu.css"

const Menu = () => {

  const {users, logOut} = useAuth();
  
    return (
        <div className="MenuBar-container">
          
        <div className="container">
        <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-10">
        <div className="menu-container">
        <ul className="d-flex align-items-end justify-content-end">

                  <Link to="/home" className="items">
                    <li>Home</li>
                  </Link>


                  { users.email && <p className ="text-white raw" > { <Link to="/" className="items">
                   <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Admin
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li> <Link to='/toursadd'><a className="dropdown-item">Add New Tours</a></Link></li>
                      <li> <Link to='/registeruser'><a className="dropdown-item">Manage All Order</a></Link></li>
                      <li> <Link to='/myorder'><a className="dropdown-item">My Order</a></Link></li>
                    </ul>
                  </li>
                  </Link>}</p>}
                  
                      
               { users.email && <p className ="text-white raw" > Hi {users.displayName} {} </p>}

                { 
                users.email ?

                <button className ="m-2" onClick = {logOut}> Logout </button>

                :
               

                 <Link to="login" className="items">
                    <li>Login</li>
                  </Link> }
                  
                  <Link to="/contact" className="items">
                    <li>Contact us</li>
                  </Link>
                 
        </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Menu;