import React from "react";
import { BsShare, BsTwitterX, BsFacebook, BsInstagram } from "react-icons/bs";

const SocialURL = () => {

     const socailIcons = [
        { name: 'URLShare', icon: BsShare, url: '#' },
        // { name: 'Facebook', icon: BsFacebook, url: '#' },
        // { name: 'Twitter', icon: BsTwitterX, url: '#' },
        // { name: 'Instagram', icon: BsInstagram, url: '#' },
    ];

    return (
        <div className="social-icons">
           <div className='share-buttons d-flex m-0 p-0 gap-3 flex-md-column flex-row'>
                {socailIcons.map((icon) => (
                    <a href={icon.url} key={icon.name} className="social-icon">
                        <icon.icon className='social-icon' />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialURL;