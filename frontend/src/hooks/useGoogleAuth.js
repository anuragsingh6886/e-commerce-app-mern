import { useCallback } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../provider/authProvider';
import { useUserProfile } from '../provider/profileProvider';
import { toast } from 'react-toastify';

const API_BASE_URL = 'http://localhost:4000';

const useGoogleAuth = () => {
    const { profile, setProfile } = useUserProfile();
    const { setTokenNew } = useAuth();
    const navigate = useNavigate();

    toast.configure();

    const handleGoogleLogin = useCallback(async (codeResponse) => {
        try {
            // Send the authorization code to your backend
            const response = await axios.post(`${API_BASE_URL}/api/auth/google`, {
                code: codeResponse.code
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            const { token, user } = response.data;

            if (!token || !user) {
                throw new Error('Invalid response from server');
            }

            setTokenNew(token);
            setProfile(user);
            navigate('/');
            toast.success('Login successful!');
        } catch (err) {
            console.error('Error in Google authentication:', err);
            setTokenNew(null);
            toast.error(err.response?.data?.error || 'Login failed');
        }
    }, [setTokenNew, setProfile, navigate]);

    toast.configure();

    const login = useGoogleLogin({
        onSuccess: handleGoogleLogin,
        onError: (error) => {
            console.error('Google Login Failed:', error);
            toast.error('Google login failed');
        },
        flow: 'auth-code',
    });

    const logout = useCallback(() => {
        googleLogout();
        setProfile(null);
        setTokenNew(null);
        navigate('/login');
    }, [setProfile, setTokenNew, navigate]);

    return { profile, login, logout };
};

export default useGoogleAuth;