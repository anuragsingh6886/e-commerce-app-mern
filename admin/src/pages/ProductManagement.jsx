import React from 'react';
import { ProductTable } from '../components/products/ProductTable';
import { useProducts } from '../hooks/useProducts';

export const ProductManagement = () => {
  const { products, loading, error, updateProduct, deleteProduct } = useProducts();


  if (loading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;
  if (error) return <div className="alert alert-danger" role="alert">Error: {error}</div>;

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2">Product List</h1>
      </div>

      <ProductTable
        products={products}
        onEdit={updateProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
};