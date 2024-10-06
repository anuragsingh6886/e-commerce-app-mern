import React from 'react';
import Ellipse from '../../assetes/images/Ellipse.png';
import HeroImage from '../../assetes/images/HeroImage.svg';
const HeroBanner = () => {
    return (
        <div className='hero-banner-home w-100 row'>
            <div className="left-banner-section col-lg-6 col-12 d-flex justify-content-center align-items-center flex-column gap-2 gap-lg-1">
                <h2>Fresh Arrivals Online</h2>
                <p>Discover Our Newest Collection Today.</p>
                <button className='plp-cta-btn'>View Collection</button>
            </div>
            <div className="right-banner-section col-lg-6 col-12 justify-content-center d-none d-lg-flex">
                <img src={Ellipse} alt="Hero Banner" className='ellipse-image' />
                <img src={HeroImage} alt="Ellipse" className='hero-image'/>
            </div>
        </div>
    )
};

export default HeroBanner;