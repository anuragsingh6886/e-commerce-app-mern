import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products/add" className={`nav-link ${isActive('/products/add')}`}>
              Add Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className={`nav-link ${isActive('/products')}`}>
              List Products
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link to="/categories" className={`nav-link ${isActive('/categories')}`}> */}
              Categories
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/orders" className={`nav-link ${isActive('/orders')}`}> */}
              Orders
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};