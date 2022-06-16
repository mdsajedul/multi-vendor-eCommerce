import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './ProductsSlice';

const Products = () => {
    const products = useSelector((state)=> console.log(state))
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    console.log(products)
    return (
        <div>
            
        </div>
    );
};

export default Products;