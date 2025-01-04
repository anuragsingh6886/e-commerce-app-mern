import React from 'react';

export const ProductActions = ({ product, onEdit, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      onDelete(product._id);
    }
  };

  return (
    <div className="d-flex gap-2">
      <button
        className="btn btn-link text-primary p-1"
        onClick={() => onEdit(product)}
        title="Edit product"
      >
        Edit
      </button>
      <button
        className="btn btn-link text-danger p-1"
        onClick={handleDelete}
        title="Delete product"
      >
        Delete
      </button>
    </div>
  );
};