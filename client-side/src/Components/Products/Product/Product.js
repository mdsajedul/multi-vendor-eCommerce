import React from 'react';
import './product.css'

const Product = ({product}) => {
    return (
        <div className='col-lg-2 product-container   p-1 '>
            <div className='product-card p-2'>
                <div>
                    <div>
                        <img className='container-fluid' src={product.img} alt="" />
                    </div>
                    <div className='py-3'>
                        <p>{product.name.substring(0,18)}</p>
                        <p><b>Price: {product.price}$</b> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;