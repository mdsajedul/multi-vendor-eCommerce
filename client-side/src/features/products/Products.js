import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../Components/Products/Product/Product';
import { fetchProducts } from './ProductsSlice';
import LoadingSpinner from '../../Components/Shared/Loading-Spinner/LoadingSpinner';

const Products = () => {
    const {products,isLoading,error} = useSelector((state)=>state.productsReducer)
    const dispatch = useDispatch()



    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

   
 
    console.log(products)
    return (
        <div>
            <LoadingSpinner isLoading={isLoading}/>            
            <div className='row gx-1'>
                    {
                        products.map(product=><Product product={product} key={product._id}/>)
                    }
                </div>
        </div>
    );
};

export default Products;