import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assetes/images/BrandLogo.svg';
import menuIcon from '../../assetes/icons/Menu.svg';

const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='header-main d-flex mx-2 px-2 align-items-center justify-content-between w-100'>
            <div className='header-logo'>
                <Link to="/"><img src={Logo} alt="brand logo" /></Link>
            </div>
            <div className='header-menu d-flex'>
                <button className='menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img src={menuIcon} alt="menu icon" />
                </button>
            </div>
            {isMenuOpen && (
                <div className="d-md-none">
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className="d-block px-3 py-2 rounded text-body fw-medium text-decoration-none bg-light-hover"
                      style={{
                        backgroundColor: '#f8f9fa',
                        color: '#212529',
                        borderRadius: '0.25rem',
                        textAlign: 'center'
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
        </div>
    );
};

export default MobileHeader;