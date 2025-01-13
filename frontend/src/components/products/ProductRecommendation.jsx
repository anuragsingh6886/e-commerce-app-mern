import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from 'axios';
import API_BASE_URL from "../../config/api";


export default function ProductRecommendation() {

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
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
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
        <div className="my-5 featured-products">
            <div className="d-flex flex-column">
                <h3 className="text-dark text-capitalize">You May Also Like</h3>
                <p className="">Similar Products</p>
            </div>
            <Slider {...settings}>
                {data.map((product) => (
                    <a href={`/product/${product._id}`} key={product._id} className="text-decoration-none hover hover-overlay">
                        <div className="product-item p-md-3 m-md-3 p-2 m-2" key={product._id}>
                        <img src={product.image} alt={product.name} className="product-image mb-2" />
                        <div className="product-desciption d-flex flex-column justify-content-between w-100 px-2">
                            <p className="head-text mb-2">{product.name}</p>
                            <div className="product-price d-flex gap-3">
                                <p className="squ-status">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                                <p className="">{product.sellingPrice.toLocaleString('en-US', { style: 'currency', currency: 'INR' })}</p>
                            </div>
                        </div>
                        </div>
                    </a>
                ))}
            </Slider>
        </div>
    );
}