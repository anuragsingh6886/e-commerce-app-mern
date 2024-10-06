import React, { StrictMode } from 'react';
import AppRouter from './routers/AppRouter';
import AuthProvider from "./provider/authProvider";
import '../src/scss/global.scss';

function App() {
    return (
        <StrictMode>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </StrictMode>
    );
}

export default App;