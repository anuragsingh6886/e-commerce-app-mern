import React from 'react';
import NewsLetter from './NewsLetter';
import SocialIcons from '../common/SocialIcons.jsx';
import Links from './Links.jsx';

const Footer = () => {
    return (
        <footer className="container footer w-100 fixed-bottom">
            <NewsLetter />
            <div className='footer-main d-flex'>
                <div className='footer-left'>
                    <div className='brand-logo'>
                        <img src="" alt="" />
                        <h3>ecommerce</h3>
                    </div>
                    <div className='brand-desc'>
                        <p>DevCut is a YouTube channel for practical project-based learning.</p>
                    </div>
                    <div className='brand-social'>
                        <SocialIcons />
                    </div>
                </div>
                <div className='footer-center'>
                    <Links />
                </div>
                <div className='footer-right'>
                    <p className='pay-text'>ACCEPTED PAYMENTS</p>
                    <div className='pay-icons'></div>
                </div>
            </div>
            <div className='footer-bottom w-100 text-center mt-4'>
                <p>&copy; 2024. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;