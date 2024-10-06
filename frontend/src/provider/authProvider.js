import axios from "axios";
import React, { createContext, useContext, useMemo , useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    const setTokenNew = (newToken) => {
        setToken(newToken);
    }

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
    }, [token]);

    const contextValue = useMemo(() => ({ token, setTokenNew }), [token ]);

    return (
        <AuthContext.Provider value={ contextValue }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

