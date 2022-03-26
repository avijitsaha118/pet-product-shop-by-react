import React, { } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {  
    let name = [];

    for (const product of cart) {
        name = name + product.name;
    }

    return (
        <div className='cart'>
            <h4>Product Order Summary</h4>
            <p> {name} </p>
           
            <button>Choose One for Me
                <FontAwesomeIcon icon={faArrowRightArrowLeft}></FontAwesomeIcon>
            </button>
            <button>Choose Again</button>
        </div>
    );
};

export default Cart;