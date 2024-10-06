import React from 'react';
import phoneIcon from '../../assetes/icons/icon-phone.svg';
import emailIcon from '../../assetes/icons/icon-email.svg';
import faceBook from '../../assetes/icons/social/Facebook.svg';
import twitter from '../../assetes/icons/social/Twitter.svg';
import instagram from '../../assetes/icons/social/Instagram.svg';
import telegram from '../../assetes/icons/social/Telegram.svg';
import youtube from '../../assetes/icons/social/Youtube.svg';
import faqIcon from '../../assetes/icons/icon-faq.svg';
import { makePhoneCall, sendEmail } from '../../services/ContactServices';

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
                        <button>Get FAQ</button>
                    </div>
                </div>
            </div>
            <div className='social-icons d-flex flex-row justify-content-center gap-4 mt-md-5 mt-3 border-top border-bottom py-3 w-100'>
                <div className='social-icon'>
                    <img src={faceBook} alt="facebook-icon" />
                </div>
                <div className='social-icon'>
                    <img src={twitter} alt="twitter-icon" />
                </div>
                <div className='social-icon'>
                    <img src={instagram} alt="instagram-icon" />
                </div>
                <div className='social-icon'>
                    <img src={telegram} alt="telegram-icon" />
                </div>
                <div className='social-icon'>
                    <img src={youtube} alt="youtube-icon" />
                </div>
            </div>
        </div>
    );
};

export default Contact;