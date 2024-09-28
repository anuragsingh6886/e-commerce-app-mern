import React, { StrictMode } from 'react';
import AppRouter from './routers/AppRouter';
import '../src/scss/global.scss';

function App() {
    return (
        <StrictMode>
            <AppRouter />
        </StrictMode>
    );
}

export default App;