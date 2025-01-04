import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { ProductManagement } from '../pages/ProductManagement';

export const ProductListPage = () => {
  return (
    <div className="container-fluid mt-5 pt-2">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 vh-100">
          <ProductManagement />
        </main>
      </div>
    </div>
  );
};