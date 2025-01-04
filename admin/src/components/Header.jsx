import React from 'react';
import Logo from '../assetes/brandLogo.svg';

const Header = () => {
    return (
        <nav class="navbar fixed-top navbar-light bg-light border-bottom">
            <img src={Logo} alt="brand logo" width="180" height="40" className='mx-3'/>
            <a class="navbar-brand mx-3" href="#">Admin Portal</a>
        </nav>
    );
};

export default Header;