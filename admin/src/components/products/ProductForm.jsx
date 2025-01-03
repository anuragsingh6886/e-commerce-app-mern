import React, { useState, useEffect } from 'react';
import { validateProduct } from '../../utils/validators';

export const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
    description: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validateProduct(formData);

    if (!isValid) {
      setErrors(errors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className={`form-control ${errors.price ? 'is-invalid' : ''}`}
        />
        {errors.price && <div className="invalid-feedback">{errors.price}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Stock</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleInputChange}
          className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
        />
        {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className={`form-control ${errors.category ? 'is-invalid' : ''}`}
        />
        {errors.category && <div className="invalid-feedback">{errors.category}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          rows="3"
        />
        {errors.description && <div className="invalid-feedback">{errors.description}</div>}
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="btn btn-secondary"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
        >
          {product ? 'Update Product' : 'Add Product'}
        </button>
      </div>
    </form>
  );
};