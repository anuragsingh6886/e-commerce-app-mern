import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
            setIsEmailValid(false);
        } else {
            setIsEmailValid(true);
            toast.success(`Thank you for subscribing with ${email}`);
            setEmail("");
        }
    };

    return (
        <div className='footer-newsletter'>
            <div className="newsletter d-flex container flex-lg-row flex-column">
                <div className='newsletter-left col-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start flex-column gap-2 gap-lg-1'>
                    <h3>Join Our Newsletter</h3>
                    <p className='d-none d-lg-block'>We love to surprise our subscribers with occasional gifts.</p>
                </div>
                <div className='newsletter-right col-6 d-flex justify-content-center justify-content-lg-end'>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="" id="" placeholder='Your Email Address' value={email} onChange={handleEmailChange} />
                        <button type='submit' className='subs-btn'>Subscribe</button>
                    </form>
                    {!isEmailValid ? <p className='text-danger'>Please enter a valid email address</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
