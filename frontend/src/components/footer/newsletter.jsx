import React from 'react';

const Newsletter = () => {
    return (
        <div className="newsletter container d-flex">
            <div className='newsletter-left'>
                <h3>Join Our Newsletter</h3>
                <p>We love to surprise our subscribers with occasional gifts.</p>
            </div>
            <div className='newsletter-right'>
                <form action="">
                    <input type="email" name="" id="" placeholder='Your Email Address' />
                    <button className='subs-btn'>Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;