import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import routes from './routeConfig';
import Promo from '../components/header/Promo';
import Breadcrumbs from '../components/common/Breadcrumbs';

const promo = true; // set true to show promo

const AppRouter = () => (
    <BrowserRouter>
        {promo && <div className="promo"><Promo /></div>}
        <Header/>
        <div className='w-100 h-100 container'>
            <Breadcrumbs />
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