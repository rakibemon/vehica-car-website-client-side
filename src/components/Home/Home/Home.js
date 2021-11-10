import React from 'react';
import Cars from '../Cars/Cars';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Cars></Cars>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;