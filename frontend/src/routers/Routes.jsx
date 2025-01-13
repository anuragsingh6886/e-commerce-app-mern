import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "../provider/authProvider";
import routeConfig from './routeConfig';
import Breadcrumbs from '../components/common/Breadcrumbs';

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

const AppRoutes = () => {
    const location = useLocation();
    console.log(location);
    const isHomePage = location.pathname === '/';

    return (
        <div className='w-100 h-100'>
            {!isHomePage && <Breadcrumbs />}
            <Routes>
                {routeConfig.map(({ path, element: Element, isProtected }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            isProtected ? (
                                <ProtectedRoute>
                                    <Element />
                                </ProtectedRoute>
                            ) : (
                                <Element />
                            )
                        }
                    />
                ))}
            </Routes>
        </div>
    );
};

export default AppRoutes;