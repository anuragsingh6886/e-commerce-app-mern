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

  if (products.length === 0) {
    return <div className="alert alert-warning" role="alert">No products found.</div>;
  }

  console.log('Products:', products);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-light">
          <tr className="text-center fw-semibold text-uppercase fs-6">
            <th className='w-25 text-center align-middle'>Product Name</th>
            <th className='w-auto text-center align-middle'>Price</th>
            <th className='text-center align-middle'>SQU</th>
            <th className='w-25 text-center align-middle'>Image</th>
            <th className='text-center align-middle'>Category</th>
            <th className='text-center align-middle'>Brand</th>
            <th className='w-25 text-center align-middle'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td className='text-center align-middle'>{product.name}</td>
              <td className='text-center align-middle'>₹{product.sellingPrice}</td>
              <td className='text-center align-middle'>{product.stock}</td>
              <td className="text-center align-middle">
                <img src={product.image} alt={product.name} style={{ width: '75%' , height: '75%' }} />
              </td>
              <td className='text-center align-middle'>{product.category ? product.category.name : ''}</td>
              <td className='text-center align-middle'>{product.brand}</td>
              <td className="text-center align-middle">
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