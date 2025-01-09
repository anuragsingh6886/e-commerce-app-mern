export const validateProduct = (product) => {
    const errors = {};

    if (!product.name?.trim()) {
      errors.name = 'Product name is required';
    }

    if (!product.listPrice || product.listPrice <= 0) {
      errors.listPrice = 'Valid list price is required';
    }

    if (!product.sellingPrice || product.sellingPrice <= 0) {
      errors.sellingPrice = 'Valid selling price is required';
    }

    if (!product.stock || product.stock < 0) {
      errors.stock = 'Valid stock quantity is required';
    }

    if (!product.description?.trim()) {
      errors.description = 'Description is required';
    }

    if (!product.image || !product.image.startsWith('http')) {
      errors.listPrice = 'Valid image is required';
    }

    if (!product.category?.trim()) {
      errors.category = 'Category is required';
    }

    if (!product.brand?.trim()) {
      errors.brand = 'Brand is required';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };