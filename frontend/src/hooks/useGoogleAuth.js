import {useState, useEffect, useCallback }  from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const useGoogleAuth = () => {
    const [profile, setProfile] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fetchUserProfile = useCallback(async (accessToken) => {
        try {
            const res = await axios.get(
                `https://www.googleapis.com/oauth2/v1/userinfo`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        Accept: 'application/json',
                    },
                }
            );
            setProfile(res.data);
            setIsLoggedIn(true);
            localStorage.setItem('google_access_token', accessToken);
        } catch (err) {
            console.log('Error fetching user profile:', err);
            setIsLoggedIn(false);
            localStorage.removeItem('google_access_token');
        }
    }, []);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            localStorage.setItem('google_access_token', codeResponse.access_token);
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    const logout = useCallback(() => {
        googleLogout();
        setProfile(null);
        setIsLoggedIn(false);
        localStorage.removeItem('google_access_token');
    }, []);

    useEffect(() => {
        const storedToken = localStorage.getItem('google_access_token');
        if (storedToken) {
            fetchUserProfile(storedToken);
        }
    }, [fetchUserProfile]);

    return {isLoggedIn , profile, login, logout};
};

export default useGoogleAuth;