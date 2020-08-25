import React from 'react';
import './product.css'

const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (

        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-description">
                <h4>{props.product.name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock -Order soon</small></p>
            </div>

        </div>
    );
};

export default Product;