import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import routes from './routeConfig';
import Promo from '../components/header/Promo';
import Breadcrumbs from '../components/common/Breadcrumbs';

const promo = true; // set true to show promo

const IsBreadcrumbs = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return !isHomePage ? <Breadcrumbs /> : null;
};

/**
 * The main AppRouter component that wraps the entire application.
 * @returns {React.ReactElement} The AppRouter component.
 */
const AppRouter = () => (
    <BrowserRouter>
        {promo && <div className="promo"><Promo /></div>}
        <Header/>
        <div className='w-100 h-100 container'>
            <IsBreadcrumbs />
            <Routes>
                {routes.map(({ path, element: Element, exact }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<Element />}
                        exact={exact}
                    />
                ))}
            </Routes>
        </div>
        <Footer />
    </BrowserRouter>
);

export default AppRouter;