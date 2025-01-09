const { get } = require('mongoose');
const Category = require('../models/Category');

const categoryController = {
    createCategory: async (req, res) => {
        try {
            const category = await Category.create(req.body);
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            res.json(categories);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const { id } = req.params;
            await Category.findByIdAndDelete(id);
            res.json({ message: 'Category deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = categoryController