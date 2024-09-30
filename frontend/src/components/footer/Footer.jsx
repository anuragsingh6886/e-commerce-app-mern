import React from 'react';
import NewsLetter from './NewsLetter';
import SocialIcons from '../common/SocialIcons.jsx';
import Links from './Links.jsx';
import Logo from '../../../src/assetes/images/BrandLogo.svg';
import mastercard from '../../../src/assetes/icons/payments/Mastercard.svg';
import visa from '../../../src/assetes/icons/payments/Visa.svg';
import amex from '../../../src/assetes/icons/payments/Amex.svg';

const Footer = () => {
    return (
        <footer className="footer w-100">
            <NewsLetter />
            <div className='container'>
                <div className='footer-main d-flex row mt-5 flex-lg-row flex-column'>
                    <div className='footer-left col-4'>
                        <div className='brand-logo'>
                            <img src={Logo} alt="brand logo" />
                        </div>
                        <div className='brand-desc'>
                            <p>DevCut is a YouTube channel for practical project-based learning.</p>
                        </div>
                        <div className='brand-social'>
                            <SocialIcons />
                        </div>
                    </div>
                    <div className='footer-center col-5'>
                        <Links />
                    </div>
                    <div className='footer-right col-3 d-flex flex-column gap-4'>
                        <h3 className='pay-text'>ACCEPTED PAYMENTS</h3>
                        <div className='pay-icons'>
                            <ul className='m-0 p-0 d-flex gap-3'>
                                <li><img src={mastercard} alt="logo of mastercard" /></li>
                                <li><img src={amex} alt="amex logo" /></li>
                                <li><img src={visa} alt="visa logo" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom w-100 text-center'>
                <p>&copy; 2024. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
