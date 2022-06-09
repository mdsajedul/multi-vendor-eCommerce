import React from 'react';
import './product.css'

const Product = ({product}) => {
    return (
        <div className='col-lg-2  p-1 '>
            <div className='product-card p-2'>
                <div>
                    <img className='container-fluid' src={product.img} alt="" />
                </div>
                <div>
                    <p>{product.name.substring(0,18)}</p>
                    <p>Price: {product.price}$</p>
                </div>
            </div>
        </div>
    );
};

export default Product;