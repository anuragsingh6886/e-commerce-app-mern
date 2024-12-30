import React from "react";
import { Pencil, Trash2 } from "lucide-react";

export const ProductActions = ({ product, onEdit, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      onDelete(product.id);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => onEdit(product)}
        className="p-1 text-blue-600 hover:bg-blue-50 rounded"
        title="Edit product"
      >
        <Pencil className="w-4 h-4" />
      </button>
      <button
        onClick={handleDelete}
        className="p-1 text-red-600 hover:bg-red-50 rounded"
        title="Delete product"
      />
      <Trash2 className="w-4 h-4" />
    </div>
  );
};
