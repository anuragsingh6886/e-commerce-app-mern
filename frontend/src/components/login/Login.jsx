import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../provider/authProvider';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import GoogleLogo from '../../assetes/icons/Google.svg';
import { toast } from 'react-toastify';

const API_BASE_URL = 'http://localhost:4000/api/auth';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const { setTokenNew } = useAuth();
    const navigate = useNavigate();
    const { login: googleLogin } = useGoogleAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email');
            return false;
        }
        if (!formData.password) {
            toast.error('Password is required');
            return false;
        }
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include' // Include this if you're using cookies
            });

            // First check if the response is ok
            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.error || `Login failed with status: ${response.status}`);
            }

            // Then try to parse the JSON
            const data = await response.json();

            if (data.token) {
                setTokenNew(data.token);
                toast.success('Login successful!');
                navigate('/');
            } else {
                throw new Error('No token received from server');
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error(error.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true);
            await googleLogin();
        } catch (error) {
            toast.error('Google login failed. Please try again.');
            console.error('Google login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='m-lg-4 m-1 p-lg-4 p-1 d-flex flex-column align-items-center w-100 login-page'>
            <div className="google-login w-100 d-flex justify-content-center mb-2">
                <button
                    className='login-btn-google d-flex align-items-center justify-content-center gap-3'
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    type="button"
                >
                    <img src={GoogleLogo} alt="google logo" className="google-logo" />
                    <p className="m-0 p-0">Continue with Google</p>
                </button>
            </div>

            <div className="devider w-100 d-flex justify-content-center align-items-center my-3">
                <span className="m-0 p-0">OR</span>
            </div>

            <div className="custom-login">
                <form onSubmit={handleLogin}>
                    <div className="email-sec d-flex flex-column mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div className="password-sec d-flex flex-column">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="mt-3 d-flex justify-content-end">
                        <Link to="/forget-password" className="forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        className='login-btn-custom w-100 mt-3'
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className="dont-have-account mt-3 d-flex justify-content-center gap-1 align-items-center">
                    Don&apost have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;