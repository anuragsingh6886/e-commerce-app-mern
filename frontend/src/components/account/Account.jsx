import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Address from './Address';
import Orders from './Orders';
import Password from './Password';
import UserDetail from './UserDetail';
import Wishlist from './Wishlist';
import Logout from './Logout';

const Account = () => {
    const [activeLink, setActiveLink] = useState('orders');
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: 'Orders', path: 'orders', component: Orders },
        { name: 'Wishlist', path: 'wishlist', component: Wishlist },
        { name: 'Address', path: 'address', component: Address },
        { name: 'Password', path: 'password', component: Password },
        { name: 'User Detail', path: 'user-detail', component: UserDetail },
        { name: 'Logout', path: 'logout', component: Logout },
    ];

    useEffect(() => {
        const currentPath = location.pathname.split('/').pop();
        if (navLinks.some(link => link.path === currentPath)) {
            setActiveLink(currentPath);
        } else if (location.pathname === '/profile') {
            navigate('orders', { replace: true });
        }
    }, [location, navigate]);

    return (
        <div className="row">
            {/* Left side navigation */}
            <div className="col-3 d-none d-lg-block">
                <nav>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.path} className="mb-2">
                                <Link
                                    to={`/profile/${link.path}`}
                                    className={`text-center p-2 ${
                                        activeLink === link.path ? 'bg-blue-500' : 'bg-gray-200'
                                    }`}
                                    onClick={() => setActiveLink(link.path)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Right side content */}
            <div className="col">
                <Routes>
                    {navLinks.map((link) => (
                        <Route
                            key={link.path}
                            path={link.path}
                            element={<link.component />}
                        />
                    ))}
                    <Route index element={<Navigate to="orders" replace />} />
                </Routes>
            </div>
        </div>
    );
};

export default Account;