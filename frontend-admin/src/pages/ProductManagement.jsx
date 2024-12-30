import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Modal } from '../components/common/Modal';
import { ProductForm } from '../components/products/ProductForm';
import { ProductTable } from '../components/products/ProductTable';
import { useProducts } from '../hooks/useProducts';

export const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const { products, loading, error, createProduct, updateProduct, deleteProduct } = useProducts();

  const handleSubmit = async (formData) => {
    try {
      setSubmitError(null);
      if (currentProduct) {
        await updateProduct(currentProduct.id, formData);
      } else {
        await createProduct(formData);
      }
      handleCloseModal();
    } catch (err) {
      setSubmitError(err.message || 'An error occurred while saving the product');
      console.error('Error:', err);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
    setSubmitError(null);
  };

  if (loading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;
  if (error) return <div className="alert alert-danger" role="alert">Error: {error}</div>;

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2">Product Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary d-flex align-items-center gap-2"
        >
          <PlusCircle size={16} />
          Add Product
        </button>
      </div>

      <ProductTable
        products={products}
        onEdit={(product) => {
          setCurrentProduct(product);
          setIsModalOpen(true);
        }}
        onDelete={deleteProduct}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={currentProduct ? 'Edit Product' : 'Add New Product'}
      >
        {submitError && (
          <div className="alert alert-danger mb-3">
            {submitError}
          </div>
        )}
        <ProductForm
          product={currentProduct}
          onSubmit={handleSubmit}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
};