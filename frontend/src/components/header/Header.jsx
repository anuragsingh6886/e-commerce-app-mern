import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from './MobileHeader';
import Logo from '../../assetes/images/BrandLogo.svg';
import userIcon from '../../assetes/icons/userIcon.svg';
import cartIcon from '../../assetes/icons/cartIcon.svg';
import { useAuth } from '../../provider/authProvider';
import { useUserProfile } from '../../provider/profileProvider';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { token } = useAuth();
    const { profile } = useUserProfile();

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg z-3">
            {isMobile ? (
                <MobileHeader />
            ) : (
                <div className='header-main d-flex mx-2 px-2 align-items-center justify-content-between w-100'>
                    <div className='header-logo'>
                    <Link to="/"><img src={Logo} alt="brand logo" /></Link>
                    </div>
                    <div className='header-menu header-center d-flex'>
                        <Link to="/">Home</Link>
                        <Link to="/categories">Categories</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className='header-login header-right d-flex'>
                        <div className='search-field'>
                            <input type="text" name="" id="" placeholder='Search Products' />
                        </div>
                        <div className='cart-icon'>
                        <Link to="/cart">
                            <button className='btn-with-icon'><img src={cartIcon} alt="cart icon" className='cart-icon' /></button>
                        </Link>
                        </div>
                        <div className='user-icon'>
                        { token ? (
                            <Link to="/profile">
                                <button className='btn-with-icon'><img src={profile?.picture || userIcon} alt="user icon" className='user-image' /></button>
                            </Link>
                            ) : (
                            <Link to="/login">
                                <button className='btn-with-icon'><img src={userIcon} alt="user icon" className='user-image' /></button>
                            </Link>
                        )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;
