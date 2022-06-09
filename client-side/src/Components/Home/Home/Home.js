import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Banner from '../Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import Product from '../../Products/Product/Product';

const Home = () => {

    const careRight = <FontAwesomeIcon icon={faCaretRight} />

    const [proudcts,setProducts] = useState([])

    const featuredCategories = [
        
    ]


    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    console.log(proudcts)

    return (
        <div className='home'>
            <Banner/>

            <div className='flash-sale-home container my-5 py-2'>
                <div className='d-flex justify-content-between'>
                    <h3>Flash Sale</h3>
                    <Link className='view-more-btn' to=''>View More {careRight}</Link>
                </div>
                <div className='row gx-1'>
                    {
                        proudcts.slice(0, 6).map(product=><Product product={product} key={product.key}/>)
                    }
                </div>
            </div>

            <div className='Featured-categories'>
                <div>
                    <h3> Featured Categories </h3>
                </div>
            </div>
        </div>
    );
};

export default Home;