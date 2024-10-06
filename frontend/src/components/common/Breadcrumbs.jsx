import React from "react";
import { useLocation, Link } from "react-router-dom";
import RightIcon from "../../../src/assetes/icons/right-icon.png";

/**
 * A breadcrumbs component that displays the current path as a set of links.
 * @returns {React.ReactElement} The breadcrumbs navigation component.
 */
const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const currentPageName = pathnames[pathnames.length - 1];

    return (
        <nav className="breadcrumbs-nav p-3" aria-label="Breadcrumb">
            <div className="d-flex mt-lg-3 flex-column container">
                <h3 className="curr-page text-capitalize mb-3 d-none d-lg-block">{currentPageName}</h3>
                <ol className="d-flex align-items-center p-0 m-0">
                    <li className="">
                        <Link to="/" className="inline-flex items-center text-sm font-medium">
                        Home
                        </Link>
                    </li>
                    <img src={RightIcon} alt="right icon" className="inline-flex items-center right-icon"/>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        return (
                            <>
                                <li key={name}>
                                    <div className="flex items-center">
                                        <Link
                                            to={routeTo}
                                            className={`text-capitalize ${
                                            isLast ? 'text-gray-500' : 'text-blue-600 hover:text-blue-800'
                                            }`}
                                            aria-current={isLast ? 'page' : undefined}
                                        >
                                            {name}
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