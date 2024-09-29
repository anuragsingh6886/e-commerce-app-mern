import React from 'react';
import useGoogleAuth from '../../hooks/useGoogleAuth';

const Account = () => {
    const { logout } = useGoogleAuth();

    return (
        <div className='m-5 p-5 text-center w-100'>
            <h1>Account</h1>
            <p>Coming Soon...</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Account;