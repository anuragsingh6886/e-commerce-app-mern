import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to="/" className="text-gray-700 hover:text-blue-600">
                    Home
                    </Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                    <li key={name}>
                        <div className="flex items-center">
                        <Link
                            to={routeTo}
                            className={`ml-1 text-sm font-medium md:ml-2 ${
                            isLast ? 'text-gray-500' : 'text-blue-600 hover:text-blue-800'
                            }`}
                            aria-current={isLast ? 'page' : undefined}
                        >
                            {name}
                        </Link>
                        </div>
                    </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;