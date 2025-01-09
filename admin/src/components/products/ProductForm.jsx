import React, { useState, useEffect } from 'react';
import { validateProduct } from '../../utils/validators';
import { productAPI, categoryAPI } from '../../services/api';
import { toast } from 'react-toastify';

export const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    listPrice: '',
    sellingPrice: '',
    stock: '',
    image: '',
    brand: '',
    category: '',
    description: ''
  });

  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await categoryAPI.fetchAll() || [];
        setCategories(response);
        console.log('Categories fetched:', response);
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to load categories');
      }
    };

    fetchCategories();
  }, []);

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
        listPrice: '',
        sellingPrice: '',
        stock: '',
        image: '',
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
      
      <div className="row">
        <div className="col-9 mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder='Enter product name'
            value={formData.name}
            onChange={handleInputChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="col-3 mb-3">
            <label className="form-label">SKU</label>
            <input
              type="number"
              name="stock"
              placeholder='Enter quantity'
              value={formData.stock}
              onChange={handleInputChange}
              className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
            />
            {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
        </div>
      </div>

      <div className="row">
        <div className="col mb-3">
          <label className="form-label">Selling Price: <b>(₹)</b></label>
          <input
            type="number"
            name="sellingPrice"
            placeholder='Enter selling price'
            value={formData.sellingPrice}
            onChange={handleInputChange}
            className={`form-control ${errors.sellingPrice ? 'is-invalid' : ''}`}
          />
          {errors.sellingPrice && <div className="invalid-feedback">{errors.sellingPrice}</div>}
        </div>

        <div className="col mb-3">
          <label className="form-label">List Price: <b>(₹)</b></label>
          <input
            type="number"
            name="listPrice"
            placeholder='Enter list price'
            value={formData.listPrice}
            onChange={handleInputChange}
            className={`form-control ${errors.listPrice ? 'is-invalid' : ''}`}
          />
          {errors.listPrice && <div className="invalid-feedback">{errors.listPrice}</div>}
        </div>
      </div>

      <div className='mb-3'>
        <label className="form-label">Product Image URL:</label>
        <input
          type="text"
          name="image"
          placeholder='https://example.com/image.jpg or https://example.com/image.URL'
          value={formData.image}
          onChange={handleInputChange}
          className={`form-control ${errors.image ? 'is-invalid' : ''}`}
        />
        {errors.image && <div className="invalid-feedback">{errors.image}</div>}
      </div>

      <div className='row'>
        <div className="col mb-3">
          <label className="form-label">Product Category</label>
          <select
            name="category"
            placeholder='Select category'
            value={formData.category}
            onChange={handleInputChange}
            className={`form-control ${errors.category ? 'is-invalid' : ''}`}
          >
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.category && <div className="invalid-feedback">{errors.category}</div>}
        </div>

        <div className="col mb-3">
          <label className="form-label">Product Brand</label>
          <input
            type="text"
            name="brand"
            placeholder='Enter product brand'
            value={formData.brand}
            onChange={handleInputChange}
            className={`form-control ${errors.category ? 'is-invalid' : ''}`}
          />
          {errors.brand && <div className="invalid-feedback">{errors.brand}</div>}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Product Description</label>
        <textarea
          name="description"
          placeholder='Enter product description'
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