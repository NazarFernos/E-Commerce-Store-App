import React from 'react';
import ShopMen from './../../assets/shopMens.jpg'
import ShopWomen from './../../assets/shopWomens.jpg'
import './styles.scss'
import { Link } from 'react-router-dom';


const Directory = () => {
    return (
        <div className="directory">
            <div className="wrap">
                <div 
                    className="item"
                    style={{backgroundImage: `url(${ShopWomen})`}}
                >
                    <Link to='/womenproducts'>
                        Women Shop
                    </Link>
                </div>
                <div
                    className="item" 
                    style={{backgroundImage: `url(${ShopMen})`}}
                >
                    <Link to='/mensproducts'>
                        Men Shop
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Directory