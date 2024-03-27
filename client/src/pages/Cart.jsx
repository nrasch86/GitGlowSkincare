import { Container } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {fa-cart-shopping} from '@fortawesome/free-solid-svg-icons';
import '../CSS/Cart.css'
import './addtocart'


const Cart = () => {
    return (
        <Container fluid className="cart-wrapper">
<div className="header">
  <h3>Cart</h3>
  <div className = "cart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /><p id= "count">0</p> 
   </div>
</div>
<div class = "container">
    <div id= "cartroot"></div>
    <div class= 'sidebar'>
        <div class="head"><p>My Cart</p></div>    
        <div id= "cartItem">Your cart is empty</div>
        <div class = "foot">
            <h3>Total</h3>
            <h2 id= 'total'>$0.00</h2>
        </div>
    </div>
</div>
</Container>
    )
};

export default Cart;