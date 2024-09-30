import React from 'react';

const Newsletter = () => {
    return (
        <div className='footer-newsletter'>
            <div className="newsletter d-flex container flex-lg-row flex-column">
                <div className='newsletter-left col-6'>
                    <h3>Join Our Newsletter</h3>
                    <p>We love to surprise our subscribers with occasional gifts.</p>
                </div>
                <div className='newsletter-right col-6 d-flex justify-content-end'>
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