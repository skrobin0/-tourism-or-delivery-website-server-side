import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import ToursAdd from './Component/Tours Add/ToursAdd';
import SingleTour from './Component/Tour Details/Single Tour/SingleTour';
import AuthProvider from './Component/Context/AuthProvider';
import Order from './Component/Tour Details/Single Tour/Place Order/Order';
import RegisterUser from './Component/Admin Section/Register User/RegisterUser';
import TourManage from './Component/Tour Details/Tour Manage/TourManage';
import About from './Component/About Us/About';
import MyOrder from './Component/Admin Section/My Order/MyOrder';
import Contact from './Component/Contact/Contact';
import Error from './Component/Error/Error';
import PrivateRoute from './Component/Private/PrivateRoute';



function App() {
  return (
    <div className="App">

    <AuthProvider>

    <Router>

     <Switch>

     <Route exact path="/">
       <Home></Home>
     </Route>

     <Route  path="/home">
       <Home></Home>
     </Route>

     <Route path="/toursadd">
       <ToursAdd></ToursAdd>
     </Route>

     <Route path="/order">
       <Order></Order>
     </Route>

     <PrivateRoute path="/singletour/:serviceId">
       <SingleTour></SingleTour>
     </PrivateRoute>

     <Route path="/registeruser">
       <RegisterUser></RegisterUser>
     </Route>

     <Route path="/alltour">
       <TourManage></TourManage>
     </Route>

     <Route path="/myorder">
       <MyOrder></MyOrder>
     </Route>
     

     <Route  path="/login">
      <Login></Login>
     </Route>

     <Route  path="/about">
      <About></About>
     </Route>

     

     <PrivateRoute  path="/contact">
      <Contact></Contact>
     </PrivateRoute>

     <Route  path="/*">
      <Error></Error>
     </Route>

    
     </Switch>

    </Router>
    
    </AuthProvider> 
     
    </div>
  );
}

export default App;