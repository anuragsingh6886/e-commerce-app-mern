import { useCallback } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../provider/authProvider';
import { useUserProfile } from '../provider/profileProvider';

const useGoogleAuth = () => {
    const { profile, setProfile } = useUserProfile();
    const { setTokenNew } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = useCallback(async (codeResponse) => {
        try {
            // Send the authorization code to your backend
            const response = await axios.post('http://localhost:4000/api/auth/google', {
                code: codeResponse.code
            });

            const { token, user } = response.data;
            setTokenNew(token);
            setProfile(user);
            navigate('/');
        } catch (err) {
            console.error('Error in Google authentication:', err);
            setTokenNew(null);
        }
    }, [setTokenNew]);

    const login = useGoogleLogin({
        onSuccess: handleGoogleLogin,
        onError: (error) => console.error('Google Login Failed:', error),
        flow: 'auth-code',
    });

    const logout = useCallback(() => {
        googleLogout();
        setProfile(null);
        setTokenNew(null);
    }, [setTokenNew]);

    return { profile, login, logout };
};

export default useGoogleAuth;