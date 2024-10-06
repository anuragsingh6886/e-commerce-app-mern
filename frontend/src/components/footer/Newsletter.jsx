import React from 'react';

const Newsletter = () => {
    return (
        <div className='footer-newsletter'>
            <div className="newsletter d-flex container flex-lg-row flex-column">
                <div className='newsletter-left col-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start  gap-2\ gap-lg-1'>
                    <h3>Join Our Newsletter</h3>
                    <p className='d-none d-lg-block'>We love to surprise our subscribers with occasional gifts.</p>
                </div>
                <div className='newsletter-right col-6 d-flex justify-content-center justify-content-lg-end'>
                    <form action="">
                        <input type="email" name="" id="" placeholder='Your Email Address' />
                        <button className='subs-btn'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
