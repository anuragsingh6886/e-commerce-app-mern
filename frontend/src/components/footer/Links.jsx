import React from 'react';

const Links = () => {
    return (
        <div className='footer-links d-flex'>
            <div className='d-flex flex-column gap-4'>
                <h3 className='head-text'>Support</h3>
                <ul className='m-0 p-0 d-flex flex-column gap-3'>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Terms of use</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div className='d-flex flex-column gap-4'>
                <h3 className='head-text'>Company</h3>
                <ul className='m-0 p-0 d-flex flex-column gap-3'>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                </ul>
            </div>
            <div className='d-flex flex-column gap-4'>
                <h3 className='head-text'>Shop</h3>
                <ul className='m-0 p-0 d-flex flex-column gap-3'>
                    <li>
                        <a href="#">My Account</a>
                    </li>
                    <li>
                        <a href="#">Checkout</a>
                    </li>
                    <li>
                        <a href="#">Cart</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Links;