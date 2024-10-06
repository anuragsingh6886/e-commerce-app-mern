import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute = () => {
    const { token } = useAuth();

    if (!token) {
      return <Navigate to="/login" />;
    }

    // If authenticated, render the child routes
    return <Outlet />;
};