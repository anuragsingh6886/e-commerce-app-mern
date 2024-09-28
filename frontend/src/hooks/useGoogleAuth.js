import {useState, useEffect}  from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const useGoogleAuth = () => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {headers: {'Authorization': `Bearer ${user.access_token}`}})
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const logout = () => {
        googleLogout();
        setUser(null);
        setProfile(null);
    };

    const isLoggedIn = !!profile;

    return {isLoggedIn , profile, login, logout};
};

export default useGoogleAuth;