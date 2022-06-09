import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './productDetail.css'

const ProductDetail = () => {

    const [product,setProduct] = useState([]);
    const [loader,setLoader] = useState(false);
    const [buyStatus,setBuyStatus] =useState(false)
    const [yourRating,setYourRating] = useState(0);
    const [yourReview,setYourReview] = useState('')
    const [reviewMessage,setReviewMessage] = useState('Please buy product for review')
    const {productId} = useParams()
 

    let navigate = useNavigate()
    


    useEffect(()=>{
        setLoader(true);
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>{
            const result = data.find( o=> o.key === productId);
            setProduct(result);
        })
        
    },[productId])



    return (
        <div className='container product-detail-container my-5'>
            <div className="row">
                <div className="col-lg-4">
                    <img className='container-fluid' src={product?.img} alt="" />
                </div>
                <div className="col-lg-4">
                    <h5>{product.name}</h5>
                    <hr />
                    <h4 style={{color:'#DE7127'}}> $ {product.price} </h4>
                </div>
              
                <div className="col-lg-4">
                    address
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;