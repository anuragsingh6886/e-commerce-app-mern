import React from 'react';
import phoneIcon from '../../assetes/icons/icon-phone.svg';
import emailIcon from '../../assetes/icons/icon-email.svg';
import socailIcons from './scoialIcons';
import faqIcon from '../../assetes/icons/icon-faq.svg';
import { makePhoneCall, sendEmail } from '../../services/ContactServices';
import { Link } from 'react-router-dom';

const Contact = () => {

    const phoneNumber = '1234567890';
    const email = 'wXqz8@example.com';

    const handleEmailClick = () => {
        sendEmail(email);
    };

    const handlePhoneClick = () => {
        makePhoneCall(phoneNumber);
    };

    return (
        <div className='m-lg-4 m-1 p-lg-4 p-1 d-flex flex-column align-items-center text-center w-100 contact-page'>
            <div className='contact-info d-flex flex-md-row flex-column justify-content-center w-100'>
                <div className='contact-sec d-flex flex-row gap-3 justify-content-center align-items-center w-100'>
                    <div className='phone-detail d-flex flex-column gap-1 justify-content-center align-items-center'>
                        <span className='d-flex align-items-center justify-content-center flex-column gap-3'><img src={phoneIcon} alt="" className='phone-icon' /><p className='m-0 p-0 head-text'>Phone Support</p></span>
                        <p>Call our support team now, 24/7 available.</p>
                        <button onClick={handlePhoneClick}>Call Now</button>
                    </div>
                </div>
                <div className='email-sec d-flex flex-row gap-3 justify-content-center align-items-center w-100'>
                    <div className='email-detail d-flex flex-column gap-1 justify-content-center align-items-center'>
                        <span className='d-flex align-items-center justify-content-center flex-column gap-3'><img src={emailIcon} alt="" className='email-icon' /><p className='m-0 p-0 head-text'>Email Support</p></span>
                        <p>Send us an email and we will get back to you.</p>
                        <button onClick={handleEmailClick}>Send Email</button>
                    </div>
                </div>
                <div className='faq-sec d-flex flex-row gap-3 justify-content-center align-items-center w-100'>
                    <div className='email-detail d-flex flex-column gap-1 justify-content-center align-items-center'>
                        <span className='d-flex align-items-center justify-content-center flex-column gap-3'><img src={faqIcon} alt="FAQ icon" className='faq-icon' /><p className='m-0 p-0 head-text'>FAQ</p ></span>
                        <p>Have any questions? Frequently asked Questions</p>
                        <Link to="/faq"><button>Get FAQ</button></Link>
                    </div>
                </div>
            </div>
            <div className='social-icons d-flex flex-row justify-content-center gap-4 mt-md-5 mt-3 border-top border-bottom py-3 w-100'>
                {socailIcons.map((account, index) => (
                    <div key={index} className='social-icon'>
                        <a href={account.url} target="_blank" rel="noopener noreferrer">
                            <img src={account.icon} alt={`${account.name}-icon`} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;