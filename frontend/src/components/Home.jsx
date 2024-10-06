import React from 'react';
import HeroBanner from './Home/HeroBanner';
import Feature from './Home/Feature';

const Home = () => {
    return (
        <div className='home-page w-100'>
            <HeroBanner />
            <Feature />
        </div>
    )
};

export default Home;