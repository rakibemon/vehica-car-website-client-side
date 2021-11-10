import React from 'react';
import Cars from '../Cars/Cars';
import ChooseUs from '../ChooseUs/ChooseUs';
import Download from '../Download/Download';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Cars></Cars>
            <Reviews></Reviews>
            <ChooseUs></ChooseUs>
            <Download></Download>
        </div>
    );
};

export default Home;