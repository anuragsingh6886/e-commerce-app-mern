import React from 'react';
import { ProductActions } from './ProductActions.jsx';

/**
 * A table component that displays a list of products.
 *
 * @param {Object[]} products the list of products to display
 * @param {Function} onEdit the function to call when a product is edited
 * @param {Function} onDelete the function to call when a product is deleted
 */
export const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Stock SQU</th>
            <th>Category</th>
            <th>Product Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>
                <ProductActions
                  product={product}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};