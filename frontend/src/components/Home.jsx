import React from 'react';
import HeroBanner from './Home/HeroBanner';
import Feature from './Home/Feature';
import FeatureProduct from './products/FeaturedProduct';

const Home = () => {
    return (
        <div className='home-page w-100'>
            <HeroBanner />
            <Feature />
            <FeatureProduct />
        </div>
    )
};

export default Home;