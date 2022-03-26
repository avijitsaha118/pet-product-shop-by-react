import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name, price, picture, id} = product;
    return (
        <div className='product'>
           <img src={picture} alt="cat-food"/>
          
           <div className='product-info'>

            <p className='product-name'>{name}</p>
            <h4>Price:${price}</h4>
            <p>ID:{id}</p>
     
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;