import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { categoryAPI } from "../../services/api";

const CategoryModal = ({ show, handleClose }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);

        categoryAPI.create(formData);
        handleClose();
        toast.success('Category added successfully');
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Category Name</label>
                        <input type="text" className="form-control" placeholder="Enter category name" required maxLength={50} minLength={3} onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Add Category
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CategoryModal;