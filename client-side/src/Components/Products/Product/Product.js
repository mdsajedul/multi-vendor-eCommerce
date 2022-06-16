import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product.css'

const Product = ({product}) => {

    console.log(product)

    return (
        <Link className='col-lg-2 product-container' to={`productDetail/${product.key || product._id}`}>
            <div className='    p-1 '>
                <div className='product-card p-2'>
                    <div>
                        <div>
                            <img className='container-fluid' src={`http://localhost:8000/uploads/${product?.thumbnail}` || product.img} alt="" />
                        </div>
                        <div className='py-3'>
                            <p>{product.name.substring(0,18)}</p>
                            <p><b>Price: {product.retailPrice || product.price}$</b> </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        
    );
};

export default Product;