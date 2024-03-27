import { Container, Button  } from 'react-bootstrap';
import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Cart.css'
import ProductPage from './ProductPage'
import Total from '../utils/index'


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemToRemove) => {
      const updatedCart = cartItems.filter(item => item !== itemToRemove);
      setCartItems(updatedCart);
    };
  

    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + item.price, 0);
    };
  

    return (
        <Container fluid className="cart-wrapper">
<div className="header">
  <h3>Cart</h3>
  <div className = "cart"><FontAwesomeIcon icon={faCartShopping} /><p id= "count">2</p> 
   </div>
</div>
<div class = "container">
    <div id= "cartroot">
        <ProductPage />
    </div>
    <div class= 'sidebar'>
        <div class="head"><p>My Cart</p></div>    
        <div id= "cartItem">
        <p>Revitalizing Vitamin C Eye Serum</p>
        <br/>
        <p>Balancing Tea Tree & Green Tea Cleanser</p>
        </div>
        <div class = "foot">
            <h3>Total</h3>
            <h2 id= 'total'>44.98</h2>
        </div>
    </div>
</div>
</Container>
    )
};

export default Cart;