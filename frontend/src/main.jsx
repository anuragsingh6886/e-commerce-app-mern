import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import ErrorPage from "./components/common/ErrorPage";
import { LineWave } from "react-loader-spinner";
import API_BASE_URL from "./config/api.js";


const Root = () => {
  const [googleConfig, setGoogleConfig] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoogleConfig = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/auth/google/config`
        );
        setGoogleConfig(response.data);
      } catch (err) {
        setError(
          err?.response?.data?.message || "Failed to initialize authentication"
        );
        console.error("Google config fetch error:", err);
      }
    };
    fetchGoogleConfig();
  }, []);

  const retryHandler = () => {
    setError(null);
    fetchGoogleConfig();
  };

  if (error)
    return (
      <ErrorPage
        title="Authentication Error"
        status={500}
        message={error}
        retry={retryHandler}
      />
    );
  if (!googleConfig)
    return (
        <div className="d-flex align-items-center justify-content-center bg-light vh-100">
        <LineWave
            height="100"
            width="100"
            color="#545463"
            ariaLabel="line-wave-loading"
        />
    </div>
    );

  return (
    <GoogleOAuthProvider clientId={googleConfig.clientId}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
