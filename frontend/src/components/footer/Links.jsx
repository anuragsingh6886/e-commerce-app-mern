import React, { useState, useEffect } from 'react';
import linksData from './links.json';

const Links = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
       setLinks(linksData.categories)
    }, []);

    return (
        <div className='footer-links d-flex'>
            {links.map((category) => (
                <div key={category.title} className="d-flex flex-column gap-4">
                    <h3 className="head-text">{category.title}</h3>
                    <ul className="m-0 p-0 d-flex flex-column gap-3">
                        {category.links.map((link) => (
                        <li key={link.text}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Links;