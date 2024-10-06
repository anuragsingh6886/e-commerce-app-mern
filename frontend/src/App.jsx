import React, { StrictMode } from 'react';
import AppRouter from './routers/AppRouter';
import AuthProvider from "./provider/authProvider";
import UserProfileProvider from "./provider/profileProvider";
import '../src/scss/global.scss';

function App() {
    return (
        <StrictMode>
            <AuthProvider>
                <UserProfileProvider>
                    <AppRouter />
                </UserProfileProvider>
            </AuthProvider>
        </StrictMode>
    );
}

export default App;