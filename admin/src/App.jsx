import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AddProductPage } from './pages/AddProductPage.jsx';
import { ProductListPage } from './pages/ProductListPage.jsx';
import { Categories } from './pages/CategoriesPage.jsx';
import { Orders } from './pages/OrdersPage.jsx';
import './scss/global.scss';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/add" element={<AddProductPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
