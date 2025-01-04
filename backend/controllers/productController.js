const Product = require('../models/Product');

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createProduct: async (req, res) => {
        try {
            console.log('Request Body:', req.body);
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            console.error('Error creating product:', err);
            res.status(500).json({ error: err.message });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
            res.json(product);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            await Product.findByIdAndDelete(id);
            res.json({ message: 'Product deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = productController;