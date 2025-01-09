import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../config/api';
import SocialURL from './SocialURL';

const Product = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div className="product-details d-flex flex-column">
                        <div className="product-title-price">
                            <h3 className="product-title text-capitalize">{product.name}</h3>
                            <p className=''>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                        </div>
                        <div className="price-info d-flex">
                        <p className="lead me-2 fw-semibold">₹ {product.sellingPrice}</p>
                            <p className="text-muted ms-2 text text-decoration-line-through">₹ {product.listPrice}</p>
                        </div>
                        <p>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                        <div className='action-buttons w-100'>
                            <button className="btn btn-primary w-50">Add to Cart</button>
                            <button className="btn btn-danger w-50">Wishlist</button>
                        </div>
                    </div>
                    <hr />
                    <SocialURL />
                </div>
            </div>
            <hr />
            <div className="product-description">
                <h2>Detail Description</h2>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default Product;