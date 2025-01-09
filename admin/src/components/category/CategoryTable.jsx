import React, { useState, useEffect } from 'react';
import { categoryAPI } from '../../services/api';
import { toast } from 'react-toastify';

export const CategoryTable = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await categoryAPI.fetchAll();
            setCategory(categories);
        };
        fetchCategories();
    })

    const deleteCategory = async (event) => {
        const categoryId = event.target.closest('tr').cells[0].textContent;
        await categoryAPI.delete(categoryId);
        setCategory(category.filter((cat) => cat._id !== categoryId));
        toast.warning('Category deleted successfully');
    }

    if (category.length === 0) {
        return <div className="alert alert-warning" role="alert">No categories found.</div>;
    }

    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {category.map((cat) => (
                        <tr key={cat._id}>
                            <td>{cat._id}</td>
                            <td>{cat.name}</td>
                            <td className="d-flex gap-2">
                                <button type="button" className="btn btn-link text-primary p-1">Edit</button>
                                <button type="button" className="btn btn-link text-danger p-1"  onClick={deleteCategory}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

