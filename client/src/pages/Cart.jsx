import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/Prodimg1.png';
import img2 from '../assets/Prodimg2.png';
import '../CSS/Cart.css';
import './addtocart';
const Cart = () => {
   return (
      <Container fluid className="cart-wrapper">
          <div className="header">
              <h3>Cart</h3>
              <div className="cart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /><p id="count">2</p></div>
          </div>
          <div className="container">
              <div id="cartroot"></div>
              <div className='sidebar'>
                  <div className="head"><p>My Cart</p></div>
                  <div id="cartItem">
                      {/* Example items added to cart */}
                      <div className="cart-item">
                          <img src={img1} alt="Green Tea Cleanser" />
                          <div className="item-description">
                              <p>Green Tea Cleanser</p>
                              <p>Price: $18.99</p>
                          </div>
                      </div>
                        <div className="cart-item">
                            <img src={img2} alt="Vitamin-C Eye Serum" />
                            <div className="item-description">
                                <p>Vitamin-C Eye Serum</p>
                                <p>Price: $24.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="foot">
                        <h3>Total</h3>
                        <h2 id='total'>$43.98</h2>
                    </div>
                </div>
            </div>
        </Container>
    )
};
export default Cart;