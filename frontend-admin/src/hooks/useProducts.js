import { useState, useEffect, useCallback } from 'react';
import { productAPI } from '../services/api';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await productAPI.fetchAll();
      console.log('Fetched products:', data);
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const createProduct = async (productData) => {
    try {
      setLoading(true);
      console.log('Creating product with data:', productData);
      const created = await productAPI.create(productData);
      console.log('Created product:', created);
      await fetchProducts();
    } catch (err) {
      console.error('Error creating product:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id, productData) => {
    try {
      setLoading(true);
      console.log('Updating product with id:', id, 'data:', productData);
      const updated = await productAPI.update(id, productData);
      console.log('Updated product:', updated);
      await fetchProducts();
    } catch (err) {
      console.error('Error updating product:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      setLoading(true);
      console.log('Deleting product with id:', id);
      await productAPI.delete(id);
      console.log('Product deleted successfully');
      await fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    createProduct,
    updateProduct,
    deleteProduct,
    refreshProducts: fetchProducts
  };
};