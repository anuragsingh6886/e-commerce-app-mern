import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from 'axios';
const API_BASE_URL = 'http://localhost:4000';
import ErrorPage from './components/common/ErrorPage';

const Root = () => {
    const [googleConfig, setGoogleConfig] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGoogleConfig = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/auth/google/config`);
                setGoogleConfig(response.data);
            } catch (err) {
                setError('Failed to initialize authentication');
                console.error('Google config fetch error:', err);
            }
        };
        fetchGoogleConfig();
    }, []);

    if (error) return <ErrorPage title="Page Not Found" status={500} message={error} retry={() => window.location.reload()} />;
    if (!googleConfig) return <div className="p-4">Loading...</div>;

    return (
        <GoogleOAuthProvider clientId={googleConfig.clientId}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </GoogleOAuthProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);