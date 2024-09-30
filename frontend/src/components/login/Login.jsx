import React, { useState} from "react";
import useGoogleAuth from '../../hooks/useGoogleAuth';
import GoogleLogo from '../../assetes/icons/Google.svg';
// import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useGoogleAuth();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         navigate('/'); // Redirect to home page after successful login
    //     }
    // }, [isLoggedIn, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        //custom logic here
        console.log('Custom login with:', email, password);
    };

    return (
        <div className='m-lg-4 m-1 p-lg-4 p-1 d-flex flex-column align-items-center w-100 login-page'>
            <div className="google-login w-100 d-flex justify-content-center mb-3">
                <button className='login-btn-google d-flex align-items-center justify-content-center gap-3' onClick={login}>
                    <img src={GoogleLogo} alt="google logo" className="google-logo" />
                    <p className="m-0 p-0">Continue with Google</p>
                </button>
            </div>
            <div className="devider w-100 d-flex justify-content-center align-items-center my-3">
                <span className="m-0 p-0 ">OR</span>
            </div>
            <div className="custom-login">
                <form onSubmit={handleLogin}>
                    <div className="email-sec d-flex flex-column mb-2">
                        <label>Email</label>
                        <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="password-sec d-flex flex-column">
                        <label>Password</label>
                        <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <p className="forgot-password mt-3 d-flex justify-content-end">Forget Password?</p>
                    <button className='login-btn-custom w-100 mt-3' type="submit">Login</button>
                </form>
                <p className="dont-have-account mt-3 d-flex justify-content-center gap-1 align-items-center">Dont have an account? <a href="#">Sign up</a></p>
            </div>
        </div>
    )
}

export default Login;