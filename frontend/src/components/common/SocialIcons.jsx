import React from 'react';

function SocialIcons() {
    return (
        <div>
            <ul className="social-icons">
                <li>
                    <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialIcons;