import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import RightIcon from "../../assetes/icons/right-icon.png";
import axios from "axios";
import API_BASE_URL from "../../config/api";

/**
 * A breadcrumbs component that displays the current path as a set of links.
 * @returns {React.ReactElement} The breadcrumbs navigation component.
 */
const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const currentPageName = pathnames[pathnames.length - 1];

    const [productName, setProductName] = useState(null);

    useEffect(() => {
        const fetchProductName = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/products/${currentPageName}`);
                setProductName(response.data.name);
            } catch (error) {
                console.error("Failed to fetch product name:", error);
            }
        };
        fetchProductName();
    }, [currentPageName]);

    return (
        <nav className="breadcrumbs-nav p-3" aria-label="Breadcrumb">
            <div className="d-flex mt-lg-3 flex-column container">
                <h3 className="curr-page text-capitalize mb-3 d-none d-lg-block text-dark">{productName}</h3>
                <ol className="d-flex align-items-center p-0 m-0">
                    <li className="">
                        <Link to="/" className="inline-flex items-center text-dark font-medium">
                        Home
                        </Link>
                    </li>
                    <img src={RightIcon} alt="right icon" className="inline-flex items-center right-icon"/>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        const displayName = index === 1 && pathnames[0] === "product" && productName ? productName : name;
                        return (
                            <>
                                <li key={name}>
                                    <div className="flex items-center">
                                        <Link
                                            to={routeTo}
                                            className={`text-capitalize ${
                                            isLast ? 'text-secondary' : 'text-dark'
                                            }`}
                                            aria-current={isLast ? 'page' : undefined}
                                        >
                                            {displayName}
                                        </Link>
                                    </div>
                                </li>
                                {!isLast && (
                                <img src={RightIcon} alt="right icon" className="inline-flex items-center right-icon"/>
                                )}
                            </>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;