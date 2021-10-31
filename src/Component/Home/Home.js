import React from 'react';
import About from '../About Us/About';
import Achievement from '../Achievement/Achievement';
import Footer from '../Footer/Footer';
import Banner from '../Top Section/Banner/Banner';

import Menu from '../Top Section/Menu/Menu';
import Details from '../Tour Details/Details/Details';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Banner></Banner>
            <Details></Details>
            <Achievement></Achievement>
            <About></About>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;