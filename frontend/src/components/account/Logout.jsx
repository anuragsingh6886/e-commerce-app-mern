import React from 'react';
import useGoogleAuth from '../../hooks/useGoogleAuth';

const Logout = () => {
    const { logout } = useGoogleAuth();

    return (
        <div>
            {/* <img src="" alt="" /> */}
            <p>Are you sure you want to logout?</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Logout;