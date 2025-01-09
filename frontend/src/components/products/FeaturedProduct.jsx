import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from 'axios';
import API_BASE_URL from "../../config/api";

export default function SimpleSlider() {

    const [data, setData] = useState([]);

    useEffect(() => {
        var fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/products`);
                const products = response.data;
                const featureProducts = products.filter((product) => product.isFeatured);
                setData(featureProducts);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, []);

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <div className="container my-3">
            <h2 className="fw-bold text-center mb-3">Featured</h2>
            <Slider {...settings}>
                {data.map((product) => (
                    <a href={`/product/${product._id}`} key={product._id} className="text-decoration-none hover hover-overlay">
                        <div className="product-item p-3" key={product._id}>
                        <img src={product.image} alt={product.name} className="product-image mb-2" />
                        <div className="product-desciption d-flex flex-column justify-content-between w-100">
                            <p className="fw-bold">{product.name}</p>
                            <div className="product-price d-flex gap-3">
                                <p className="">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                                <p className="">${product.sellingPrice}</p>
                            </div>
                        </div>
                        </div>
                    </a>
                ))}
                {/* {data.map((product) => (
                    <div className="product-item p-3" key={product._id}>
                        <img src={product.image} alt={product.name} className="product-image mb-2 w-100 h-100 object-fit-cover" />
                        <h3 className="fw-bold">{product.name}</h3>
                        <p>{product.brand}</p>
                        <div className="product-price d-flex gap-3 align-items-center justify-content-center w-100">
                            <span className="fw-bold">${product.sellingPrice}</span>
                            <span className="fw-bold text-decoration-line-through">${product.listPrice}</span>
                        </div>
                        <div className="product-action d-flex align-items-center justify-content-center w-100">
                            <button className="btn w-100">Add to Cart</button>
                            <button className="btn w-100">View Details</button>
                        </div>
                    </div>
                ))} */}
            </Slider>
        </div>
    );
}