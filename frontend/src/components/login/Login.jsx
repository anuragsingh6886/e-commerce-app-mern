import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/authProvider';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import GoogleLogo from '../../assetes/icons/Google.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setTokenNew } = useAuth();
    const navigate = useNavigate();
    const { login: googleLogin } = useGoogleAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.token) {
                setTokenNew(data.token);
                navigate('/');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleGoogleLogin = async () => {
        googleLogin();
        navigate('/');
    };

    return (
        <div className='m-lg-4 m-1 p-lg-4 p-1 d-flex flex-column align-items-center w-100 login-page'>
            <div className="google-login w-100 d-flex justify-content-center mb-2">
                <button className='login-btn-google d-flex align-items-center justify-content-center gap-3' onClick={handleGoogleLogin}>
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
                    <Link to="/forget-password"><p className="forgot-password mt-3 d-flex justify-content-end">Forget Password?</p></Link>
                    <button className='login-btn-custom w-100 mt-3' type="submit">Login</button>
                </form>
                <p className="dont-have-account mt-3 d-flex justify-content-center gap-1 align-items-center">Dont have an account? <Link to="/signup"><a href="#">Sign up</a></Link></p>
            </div>
        </div>
    )
}

export default Login;