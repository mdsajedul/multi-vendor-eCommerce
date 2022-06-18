import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../../Shared/Loading-Spinner/LoadingSpinner';
import './productDetail.css'
import { fetchProductDetail } from './ProductDetailSlice';
import ReactStars from "react-rating-stars-component";
import { addToCart, decrement, increament } from '../../../features/cart/CartSlice';
import { cartTotalPriceSelector } from '../../../features/cart/selector';


const ProductDetail = () => {

    // const [product,setProduct] = useState([]);
    const [loader,setLoader] = useState(false);
    const [buyStatus,setBuyStatus] =useState(false)
    const [yourRating,setYourRating] = useState(0);
    const [yourReview,setYourReview] = useState('')
    const [reviewMessage,setReviewMessage] = useState('Please buy product for review')
    const {productId} = useParams()
 

    let navigate = useNavigate()
    
    // const cart = useSelector((state) => state.cart);
    // const totalPrice = useSelector(cartTotalPriceSelector);

    const {product, isLoading,error} = useSelector((state)=>state.productDetailReducer)



    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(fetchProductDetail(productId))
    },[dispatch,productId])


    

    return (
        <div className='container product-detail-container my-5'>
            {
                isLoading? 
                <div>
                    <LoadingSpinner isLoading={isLoading}></LoadingSpinner>
                </div>
                :
                <div className="row gx-0 p-4">
                    <div className="col-lg-6 p-2 d-flex justify-content-center">
                        <div>
                            <img className='img-main container-fluid'  src={`http://localhost:8000/uploads/${product?.product?.thumbnail}`} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 p-4 d-flex justify-content-center">
                        <div>
                            <h5 className='product-name'>{product?.product?.name}</h5>
                            <p>Shop: {product?.product?.shopName}</p>

                            <div className='rating'>
                                <ReactStars
                                    value={4.5}
                                    edit={false}
                                    isHalf={true}
                                    count={5}
                                    size={18}
                                    color2={'#ffd700'} 
                                />
                                <p className='ps-4'> {product?.product?.reviews.length} Reviews</p>
                            </div>
                            <h4 style={{color:'#DE7127'}}> $ {product?.product?.retailPrice} </h4>
                            <div className='d-flex justify-content-center'>
                                <div className='d-flex align-items-center in-dc-container'>
                                    <button onClick={dispatch(increament(productId))} className='btn-in me-2'>-</button>
                                    <span className='me-2 cart-value'>0</span>
                                    <button onClick={dispatch(decrement(productId))} className='btn-dc'>+</button>
                                </div>
                                <button onClick={dispatch(addToCart(productId))} className='add-card'>Add to cart</button>
                            </div>
                            
                        </div>
                        
                    </div>
             </div>
            }
            <hr />
            <div className='p-4'>
                <h2>Product Overview</h2>
                <div className='p-2'>
                    <p>Details</p>
                    {product?.product?.productDetail}
                </div>
            </div>
            
            
        </div>
    );
};

export default ProductDetail;