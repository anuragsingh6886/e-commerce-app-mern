import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assetes/images/BrandLogo.svg';
import menuIcon from '../../assetes/icons/Menu.svg';

const MobileHeader = () => {
    return (
        <div className='header-main d-flex mx-2 px-2 align-items-center justify-content-between w-100'>
            <div className='header-logo'>
                <Link to="/"><img src={Logo} alt="brand logo" /></Link>
            </div>
            <div className='header-menu d-flex'>
                <img src={menuIcon} alt="menu icon" />
            </div>
        </div>
    );
};

export default MobileHeader;