import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from './MobileHeader';
import Logo from '../../assetes/images/BrandLogo.svg';
import userIcon from '../../assetes/icons/userIcon.svg';
import cartIcon from '../../assetes/icons/cartIcon.svg';
import { useAuth } from '../../provider/authProvider';
import { useUserProfile } from '../../provider/profileProvider';
import chevronDown from '../../assetes/icons/chevronDown.svg';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const { token } = useAuth();
    const { profile } = useUserProfile();

     // Category data structure with two levels
     const categories = {
        men: {
            name: 'Men',
            subcategories: ['Shirts', 'Pants', 'Shoes', 'Accessories']
        },
        women: {
            name: 'Women',
            subcategories: ['Dresses', 'Tops', 'Bottoms', 'Shoes']
        },
        kids: {
            name: 'Kids',
            subcategories: ['Boys', 'Girls', 'Infants', 'Toys']
        },
        accessories: {
            name: 'Accessories',
            subcategories: ['Bags', 'Jewelry', 'Belts', 'Sunglasses']
        },
        watches: {
            name: 'Watches',
            subcategories: ['Analog', 'Digital', 'Smart', 'Luxury']
        }
    };

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

    const handleCategoryHover = (category) => {
        setActiveCategory(category);
    };

    const handleMouseLeave = () => {
        setActiveCategory(null);
    };

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
                        <div className="dropdown-btn" onMouseLeave={handleMouseLeave} >
                            <Link to="/categories" className="custom-dropdown">
                                Categories
                                <img src={chevronDown} alt="chevron down" className='chevron-down' style={{ width: '20px', height: '20px' }} />
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {Object.entries(categories).map(([key, category]) => (
                                    <div
                                        key={key}
                                        className="dropdown-item-wrapper"
                                        onMouseEnter={() => handleCategoryHover(key)}
                                    >
                                        <Link
                                            className="dropdown-item d-flex justify-content-between align-items-center"
                                            to={`/categories/${key}`}
                                        >
                                            {category.name}
                                            <img
                                                src={chevronDown}
                                                alt="chevron right"
                                                className='chevron-right'
                                                style={{
                                                    width: '20px',
                                                    height: '20px',
                                                    transform: 'rotate(-90deg)'
                                                }}
                                            />
                                        </Link>
                                        {activeCategory === key && (
                                            <div className="submenu-dropdown">
                                                {category.subcategories.map((subcategory) => (
                                                    <Link
                                                        key={subcategory}
                                                        className="dropdown-item"
                                                        to={`/categories/${key}/${subcategory.toLowerCase()}`}
                                                    >
                                                        {subcategory}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
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
