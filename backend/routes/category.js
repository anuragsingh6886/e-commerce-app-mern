const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;