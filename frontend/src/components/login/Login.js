import React from "react";
import useGoogleAuth from '../../hooks/useGoogleAuth';


const Login = () => {

    const { isLoggedIn, profile, login } = useGoogleAuth();

    return (
        <div className='m-5 p-5 text-center w-100'>
            <h1>Login</h1>
            {isLoggedIn ? (
                <img src={profile.picture} alt="user image" />
            ) : (
            <button onClick={login} className='btn-with-icon'>login</button>
            )}
        </div>
    )
}

export default Login;