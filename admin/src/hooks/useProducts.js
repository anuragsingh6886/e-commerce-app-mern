import { useState, useEffect, useCallback } from 'react';
import { productAPI, categoryAPI } from '../services/api';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categoryCount, setCategoryCount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productCount, setProductCount] = useState(null);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const productData = await productAPI.fetchAll();
      setProductCount(productData.length);
      setProducts(productData);
      const categoryData = await categoryAPI.fetchAll();
      setCategoryCount(categoryData.length);
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
    productCount,
    categoryCount,
    loading,
    error,
    updateProduct,
    deleteProduct,
    refreshProducts: fetchProducts
  };
};