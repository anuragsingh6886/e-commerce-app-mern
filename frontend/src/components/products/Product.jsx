import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../config/api';
import SocialURL from './SocialURL';
import { CiHeart } from "react-icons/ci";
import ProductRecommendation from './ProductRecommendation';

const Product = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

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
        <div className="container product-container">
            <div className="row d-flex flex-md-row flex-column my-5">
                <div className="col-md-6 col">
                    <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-5 col">
                    <div className="product-details d-flex flex-column h-100">
                        <div className="product-title pt-2">
                            <h3 className="product-title text-dark text-capitalize">{product.name}</h3>
                            <div className="product-status w-100 d-flex">
                                <p className='squ-status'>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                            </div>
                        </div>
                        <div className="price-info d-flex flex-column">
                            <div className="price w-100 d-flex">
                                <p className="lead me-2 fw-semibold">{product.sellingPrice.toLocaleString('en-US', { style: 'currency', currency: 'INR' })}</p>
                                <p className="text-muted ms-2 text text-decoration-line-through">{product.listPrice.toLocaleString('en-US', { style: 'currency', currency: 'INR' })}</p>
                                <p className='discount-percentage ms-2'>{(((product.listPrice - product.sellingPrice) / product.listPrice) * 100).toFixed(2)}% off</p>
                            </div>
                            <p className="tax-info">Inclusive of all taxes*</p>
                        </div>
                        <div className="quantity-val w-100">
                            <p className=''>Quantity</p>
                            <div className="input-group mb-3">
                                <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={() => {setQuantity(quantity - 1)}} disabled={quantity === 1}>-</button>
                                <input type="text" className="form-control text-center" placeholder="1" aria-label="Example text with button addon" aria-describedby="button-addon1" value={quantity} onChange={() => {}} />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {setQuantity(quantity + 1)}} disabled={product.stock === 0}>+</button>
                            </div>
                        </div>
                        <div className='action-buttons w-100'>
                            <button className="btn add-to-cart">Add to Cart</button>
                            <button className="btn wishlist-btn"><CiHeart className='heart-icon'/></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col d-flex flex-md-column flex-row">
                    <SocialURL />
                </div>
            </div>
            <hr />
            <div className="product-description my-5">
                <h3 className='text-dark text-capitalize'>Detail Description</h3>
                <p>{product.description}</p>
            </div>
            <hr />
            <ProductRecommendation />
        </div>
    );
};

export default Product;