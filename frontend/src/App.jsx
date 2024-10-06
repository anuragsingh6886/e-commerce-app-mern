import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes  from './routers/Routes';
import AuthProvider from "./provider/authProvider";
import { UserProfileProvider } from "./provider/profileProvider";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Promo from './components/header/Promo';
import '../src/scss/global.scss';

const promo = true; // set true to show promo

function App() {
    return (
        <Router>
            <AuthProvider>
                <UserProfileProvider>
                    {promo && <Promo />}
                    <Header />
                    <AppRoutes />
                    <Footer />
                </UserProfileProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;