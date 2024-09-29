import React from 'react';
import facebook from '../../../src/assetes/icons/social/Facebook.svg';
import twitter from '../../../src/assetes/icons/social/Twitter.svg';
import instagram from '../../../src/assetes/icons/social/Instagram.svg';

function SocialIcons() {
    return (
        <div>
            <ul className="social-icons d-flex m-0 p-0">
                <li>
                    <a href="https://www.facebook.com/">
                        <img src={facebook} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/">
                        <img src={twitter} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/">
                        <img src={instagram} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialIcons;