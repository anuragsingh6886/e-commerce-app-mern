import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { ProductForm } from '../components/products/ProductForm';

export const AddProductPage = () => {
  const handleSubmit = async (formData) => {
    try {
      // API call to create product
      console.log('Creating product:', formData);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Add New Product</h1>
          </div>
          <div className="row">
            <div className="col-md-8">
              <ProductForm onSubmit={handleSubmit} onCancel={() => window.history.back()} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};