import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { ProductManagement } from '../pages/ProductManagement';

export const ProductListPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <ProductManagement />
        </main>
      </div>
    </div>
  );
};