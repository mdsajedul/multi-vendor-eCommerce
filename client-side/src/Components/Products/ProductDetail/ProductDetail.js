import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './productDetail.css'
import { fetchProductDetail } from './ProductDetailSlice';

const ProductDetail = () => {

    // const [product,setProduct] = useState([]);
    const [loader,setLoader] = useState(false);
    const [buyStatus,setBuyStatus] =useState(false)
    const [yourRating,setYourRating] = useState(0);
    const [yourReview,setYourReview] = useState('')
    const [reviewMessage,setReviewMessage] = useState('Please buy product for review')
    const {productId} = useParams()
 

    let navigate = useNavigate()
    
    const {product, isLoading,error} = useSelector((state)=>state.productDetailReducer)



    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(fetchProductDetail(productId))
    },[dispatch,productId])

    

    return (
        <div className='container product-detail-container my-5'>
            <div className="row">
                <div className="col-lg-4">
                    <img className='container-fluid' src={`http://localhost:8000/uploads/${product?.product?.thumbnail}`} alt="" />
                </div>
                <div className="col-lg-4">
                    <h5>{product?.product?.name}</h5>
                    <hr />
                    <h4 style={{color:'#DE7127'}}> $ {product?.product?.retailPrice} </h4>
                </div>
                
                <div className="col-lg-4">
                    address
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;