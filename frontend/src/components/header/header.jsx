import React from 'react';
import { Link } from 'react-router-dom';
import useGoogleAuth from '../../hooks/useGoogleAuth';

const Header = () => {
    const { isLoggedIn, profile, login, logout } = useGoogleAuth();

    return (
        <nav className="container navbar navbar-expand-md">
            <div className='header-main d-flex mx-2 px-2 align-items-center justify-content-between'>
                <div className='header-logo header-left'>
                    <h3>Ecommerce</h3>
                </div>
                <div className='header-menu header-center'>
                    <Link to="/">Home</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='header-login header-right d-flex'>
                    <div className='search-field'>
                        <h3>Search</h3>
                    </div>
                    <div className='cart-icon'>
                        <h3>Cart</h3>
                    </div>
                    <div className='user-icon'>
                        {isLoggedIn ? (
                            <img src={profile.picture} alt="user image" onClick={logout} />
                        ) : (
                            <button onClick={login}>Sign in</button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;