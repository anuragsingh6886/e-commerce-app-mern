import React, { useState, useEffect } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import axios from 'axios';
import API_BASE_URL from '../../config/api';

const Categories = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        var fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/products`);
                const products = response.data;
                setProducts(products);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, []);

    const percentageToValue = (percentage) => {
        return (percentage / 100) * (max - min) + min;
    };

    const handleMinChange = (event) => {
        const value = Math.min(Number(event.target.value), max); // Ensure min <= max
        setMin(value);
    };

    const handleMaxChange = (event) => {
        const value = Math.max(Number(event.target.value), min); // Ensure max >= min
        setMax(value);
    };

    const handleSliderChange = (values) => {
        setMin(values[0]);
        setMax(values[1]);
    };

    // Category data structure with two levels
    const categories = {
        men: { name: 'Men' },
        women: { name: 'Women' },
        kids: { name: 'Kids' },
        accessories: { name: 'Accessories' },
        watches: { name: 'Watches' }
    };

    return (
        <div className='container'>
            <div className='row category-page'>
                <div className='col-md-3 category-filter'>
                    <div className='categories'>
                        <p className='head-text'>Categories</p>
                        <ul className=''>
                            {Object.keys(categories).map((category) => (
                                <li key={category} className=''>
                                    <a href="#">{categories[category].name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='size'>
                        <p className='head-text'>Size</p>
                        <ul className=''>
                            <li className=''>
                                <a href='#'>S</a>
                            </li>
                            <li className=''>
                                <a href='#'>M</a>
                            </li>
                            <li className=''>
                                <a href='#'>L</a>
                            </li>
                            <li className=''>
                                <a href='#'>XL</a>
                            </li>
                        </ul>
                    </div>
                    <div className='price'>
                        <p className='head-text'>Price</p>
                        <div className='d-flex flex-row align-items-center justify-content-between mt-3 mb-3 p-0 m-0 w-100'>
                            <input type="number" className='me-2 w-25' placeholder='Min' onChange={handleMinChange} min={0} max={max} value={min} />
                            <span className='mx-2'>to</span>
                            <input type="number" className='ms-2 w-25' placeholder='Max' onChange={handleMaxChange} min={min} max={100} value={max} />
                        </div>
                        <RangeSlider min={0} max={100} value={[min, max]} onInput={handleSliderChange} step={1} />
                    </div>
                </div>
                <div className='col-md-9 product-list-item'>
                    <div className='row'>
                        {products.map((product) => (
                            <div key={product._id} className='col-md-4 product-item'>
                                <div className='card'>
                                    <img src={product.image} alt={product.name} className='card-img-top' />
                                    <div className="product-desciption d-flex flex-column justify-content-between w-100 px-2">
                                        <p className="head-text mb-2">{product.name}</p>
                                        <div className="product-price d-flex gap-3">
                                            <p className="squ-status">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                                            <p className="">{product.sellingPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;