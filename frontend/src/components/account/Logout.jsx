import React from 'react';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import WarningIcon from '../../assetes/icons/Warning.svg';

const Logout = () => {
    const { logout } = useGoogleAuth();

    return (
        <div className='logout-container d-flex flex-column gap-3 justify-content-center align-items-center'>
            <img src={WarningIcon} alt="warning icon" className='warning-icon' />
            <p>Are you sure you want to logout?</p>
            <button onClick={logout} className='logout-btn'>Logout</button>
        </div>
    );
}

export default Logout;