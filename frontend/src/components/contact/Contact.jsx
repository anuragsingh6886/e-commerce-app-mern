import React from 'react';
import phoneIcon from '../../assetes/icons/icon-phone.svg';
import emailIcon from '../../assetes/icons/icon-email.svg';
import faceBook from '../../assetes/icons/social/Facebook.svg';
import twitter from '../../assetes/icons/social/Twitter.svg';
import instagram from '../../assetes/icons/social/Instagram.svg';
import telegram from '../../assetes/icons/social/Telegram.svg';
import youtube from '../../assetes/icons/social/Youtube.svg';

const Contact = () => {
    return (
        <div className='m-lg-4 m-1 p-lg-4 p-1 d-flex flex-column align-items-center text-center w-100 contact-page'>
            <div className='contact-info d-flex flex-md-row flex-column justify-content-center gap-3'>
                <div className='contact-sec d-flex flex-row gap-3 justify-content-center align-items-center w-100'>
                    <div className='phone-icon'>
                        <img src={phoneIcon} alt="" />
                    </div>
                    <div className='phone-detail d-flex flex-column gap-1 justify-content-center align-items-start'>
                        <p>Have a question?</p>
                        <p>1800 123 456</p>
                    </div>
                </div>
                <div className='email-sec d-flex flex-row gap-3 justify-content-center align-items-center w-100'>
                    <div className='email-icon'>
                        <img src={emailIcon} alt="" />
                    </div>
                    <div className='email-detail d-flex flex-column gap-1 justify-content-center align-items-start'>
                        <p>Contact us at</p>
                        <p>commerce123@example.com</p>
                    </div>
                </div>
            </div>
            <div className='social-icons d-flex flex-row justify-content-center gap-3'>
                <div className='social-icon facebook-icon'>
                    <img src={faceBook} alt="" />
                </div>
                <div className='social-icon twitter-icon'>
                    <img src={twitter} alt="" />
                </div>
                <div className='social-icon instagram-icon'>
                    <img src={instagram} alt="" />
                </div>
                <div className='social-icon telegram-icon'>
                    <img src={telegram} alt="" />
                </div>
                <div className='social-icon youtube-icon'>
                    <img src={youtube} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;