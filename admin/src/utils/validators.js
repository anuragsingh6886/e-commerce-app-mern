export const validateProduct = (product) => {
    const errors = {};

    if (!product.name?.trim()) {
      errors.name = 'Product name is required';
    }

    if (!product.price || product.price <= 0) {
      errors.price = 'Valid price is required';
    }

    if (!product.stock || product.stock < 0) {
      errors.stock = 'Valid stock quantity is required';
    }

    if (!product.category?.trim()) {
      errors.category = 'Category is required';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };