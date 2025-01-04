import React, { useState, useEffect } from 'react';
import { validateProduct } from '../../utils/validators';
import { productAPI } from '../../services/api';
import { toast } from 'react-toastify';

export const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    brand: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = validateProduct(formData);

    if (!isValid) {
      setErrors(errors);
      return;
    }
    setErrors({});
    try {
      const response = await productAPI.create(formData);
      console.log('Product created:', response);
      toast.success('Product created successfully');
      onSubmit(response);
      // clear form data
      setFormData({
        name: '',
        price: '',
        stock: '',
        brand: '',
        category: '',
        description: ''
      })
    } catch (error) {
      console.error('Error creating product:', error.response?.data || error);
      toast.error('Error creating product');
    }
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

      <div className="row">
        <div className="col mb-3">
          <label className="form-label">Price: <b>(₹)</b></label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className={`form-control ${errors.price ? 'is-invalid' : ''}`}
          />
          {errors.price && <div className="invalid-feedback">{errors.price}</div>}
        </div>

        <div className="col mb-3">
          <label className="form-label">SKU</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
          />
          {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
        </div>
      </div>

      <div className='mb-3'>
        <label className="form-label">Product Image</label>
        <input
          type="file"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          className={`form-control ${errors.image ? 'is-invalid' : ''}`}
        />
        {errors.image && <div className="invalid-feedback">{errors.image}</div>}
      </div>

      <div className='row'>
        <div className="col mb-3">
          <label className="form-label">Product Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className={`form-control ${errors.category ? 'is-invalid' : ''}`}
          />
          {errors.category && <div className="invalid-feedback">{errors.category}</div>}
        </div>

        <div className="col mb-3">
          <label className="form-label">Product Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
            className={`form-control ${errors.category ? 'is-invalid' : ''}`}
          />
          {errors.brand && <div className="invalid-feedback">{errors.brand}</div>}
        </div>
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