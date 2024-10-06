import React from 'react';
import DeliveryIcon from '../../assetes/icons/Delivery.svg';
import StarBadgeIcon from '../../assetes/icons/StarBadge.svg';
import ShieldCheckIcon from '../../assetes/icons/ShieldCheck.svg';

const Feature = () => {
    return (
        <div className='feature-home w-100 container'>
            <div className='feature-info d-flex flex-md-row flex-column justify-content-center w-100'>
                <div className='delivery-sec d-flex flex-row gap-3 justify-content-center w-100'>
                    <div className='delivery-detail d-flex flex-column gap-1 justify-content-center'>
                        <span className='d-flex justify-content-center flex-column gap-3'>
                            <img src={DeliveryIcon} alt="delivery icon" className='delivery-icon' />
                            <p className='m-0 p-0 head-text'>Free Shipping</p>
                        </span>
                        <p>Upgrade your style today and get FREE shipping on all orders! Dont miss out.</p>
                    </div>
                </div>
                <div className='star-sec d-flex flex-row gap-3 justify-content-center w-100'>
                    <div className='star-detail d-flex flex-column gap-1 justify-content-center'>
                        <span className='d-flex justify-content-center flex-column gap-3'>
                            <img src={StarBadgeIcon} alt="star icon" className='star-icon' />
                            <p className='m-0 p-0 head-text'>Satisfaction Guarantee</p>
                        </span>
                        <p>Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>
                    </div>
                </div>
                <div className='payment-sec d-flex flex-row gap-3 justify-content-center w-100'>
                    <div className='payment-detail d-flex flex-column gap-1 justify-content-center'>
                        <span className='d-flex justify-content-center flex-column gap-3'>
                            <img src={ShieldCheckIcon} alt="payment icon" className='payment-icon' />
                            <p className='m-0 p-0 head-text'>Secure Payment</p >
                        </span>
                        <p>Your security is our priority. Your payments are secure with us.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Feature;