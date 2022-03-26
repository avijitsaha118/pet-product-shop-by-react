import React, { } from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
  
    let name = [];

    for (const product of cart) {
        name = name + product.name;
    }

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p> {name} </p>
           
            <button>Choose One for Me</button>
            <button>Choose Again</button>
        </div>
    );
};

export default Cart;