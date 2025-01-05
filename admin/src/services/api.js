import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://e-commerce-app-mern-backend.onrender.com/';

export const productAPI = {
  fetchAll: async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  },

  create: async (productData) => {
    const response = await axios.post(`${API_BASE_URL}/products`, productData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },

  update: async (id, productData) => {
    const response = await axios.put(`${API_BASE_URL}/products/${id}`, productData);
    return response.data;
  },

  delete: async (id) => {
    await axios.delete(`${API_BASE_URL}/products/${id}`);
  }
};
