import React from 'react';
import Logo from '../assetes/brandLogo.svg';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light mb-3 shadow border-bottom border-gray">
                <img src={Logo} alt="brand logo" width="180" height="40" className='mx-3'/>
                <a class="navbar-brand mx-3" href="#">Admin Portal</a>
            </nav>
        </div>
    );
};

export default Header;