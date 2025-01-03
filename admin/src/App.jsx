import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AddProductPage } from './pages/AddProductPage.jsx';
import { ProductListPage } from './pages/ProductListPage.jsx';
import './scss/global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/add" element={<AddProductPage />} />
          <Route path="/products" element={<ProductListPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
