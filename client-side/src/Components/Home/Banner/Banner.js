import React from 'react';
import './banner.css';

import { Carousel } from 'react-bootstrap';

import bannerOne from '../../../Assets/pictures/bannerOne.png'
import bannerTwo from '../../../Assets/pictures/bannerTwo.png'
import { Link } from 'react-router-dom';


const Banner = () => {

    const category = ["Men's Fashion","Women's Fashion", "Babies and Toy's","Health & Beauty","Phones and accessories​","Computer and accessories","Electronic accessories","Home and lifestyle","Sports and outdoor","Groceries & Pets","Automotive & Motorbike"]

    return (
        <div className='row gx-0 banner '>
            <div className="col-lg-4  ">
                <div className="category d-flex justify-content-center">
                    <ul>
                        {
                            category.map(cate=><li><Link className='category-btn' to=''>{cate}</Link></li>)
                        }
                        
                    </ul>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="">
                    <Carousel>
                        
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100 h-100"
                            src={bannerOne}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                            className="d-block w-100 h-100"
                            src={bannerTwo }
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;