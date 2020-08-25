import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
             
                    {
                        products.map(sglProduct => <Product product={sglProduct}></Product>) 
                        
                    }
    
            </div>
            <div className="cart-container">
                <h2>Cart here</h2>
            </div>
            
        </div>
        
    );
};

export default Shop;