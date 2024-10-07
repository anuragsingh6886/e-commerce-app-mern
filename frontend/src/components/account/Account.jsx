import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Address from './Address';
import Orders from './Orders';
import Password from './Password';
import UserDetail from './UserDetail';
import Wishlist from './Wishlist';
import Logout from './Logout';
import CartIcon from '../../assetes/icons/cartIcon.svg';
import KeyIcon from '../../assetes/icons/FadeIcon/Key.svg';
import UserIcon from '../../assetes/icons/FadeIcon/User.svg';
import HeartIcon from '../../assetes/icons/FadeIcon/Heart.svg';
import AddressIcon from '../../assetes/icons/FadeIcon/Delivery.svg';
import LogoutIcon from '../../assetes/icons/FadeIcon/Logout.svg';

const Account = () => {
    const [activeLink, setActiveLink] = useState('orders');
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: 'Orders', path: 'orders', component: Orders, icon: CartIcon },
        { name: 'Wishlist', path: 'wishlist', component: Wishlist, icon: HeartIcon },
        { name: 'Address', path: 'address', component: Address, icon: AddressIcon },
        { name: 'Password', path: 'password', component: Password, icon: KeyIcon },
        { name: 'User Detail', path: 'user-detail', component: UserDetail, icon: UserIcon },
        { name: 'Logout', path: 'logout', component: Logout, icon: LogoutIcon },
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
        <div className="account-page container">
            <div className="row m-lg-4 p-lg-4 m-1 p-1">
                {/* Left side navigation */}
                <div className="col-3 d-none d-lg-block account-nav">
                    <nav>
                        <ul className="action-link-list">
                            {navLinks.map((link) => (
                                <li key={link.path} className={`action-link ${
                                    activeLink === link.path ? 'action-link-active' : ''
                                }`}>
                                    <img src={link.icon} alt={link.name} />
                                    <Link
                                        to={`/profile/${link.path}`}
                                        className={`text-center p-2 ${
                                            activeLink === link.path ? 'text-dark' : 'text-secondary'
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
                <div className="col account-content d-flex align-items-center justify-content-center">
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
        </div>
    );
};

export default Account;