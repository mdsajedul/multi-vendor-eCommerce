import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product.css'

const Product = ({product}) => {

    console.log(product)

    return (
        <div className='col-lg-2 product-container' >
            <div className='    p-1 '>
                <div className='product-card p-2'>
                    <Link to={`productDetail/${product.key || product._id}`}>
                        <div>
                            <img className='container-fluid product-img' height='160px' src={`http://localhost:8000/uploads/${product?.thumbnail}`} alt="product" />
                        </div> 
                        <div className='py-2 card-content'>
                            <label>{product.name.substring(0,18)}</label><br />
                            <label><b>Price: {product.retailPrice || product.price}$</b> </label>
                        </div>
                    </Link>
                    <button className='add-to-cart-btn'>Add to cart</button>
                </div>
            </div>
        </div>
        
    );
};

export default Product;