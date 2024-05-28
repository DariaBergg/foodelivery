import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import './App.css';

function Cart () {
   
const {cartItems, removeFromCart, getTotalCost, incrementItem, decrementItem, clearCart} = useCart();
const [modalIsOpen, setModalIsOpen] = useState(false);

const openModal = () => {
    console.log('open')
    setModalIsOpen(true);
}

const closeModal = () => {
    setModalIsOpen(false);
    clearCart();
}
return (
    <div className="cart">
        <h2>Your cart</h2>
        {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                {cartItems.map((item) => (
                 <div key={item.id} className="cart-item">
                 <img src={item.image} alt={item.name} className="product-image" />
                 <div className="product-details">
                    <div className="name-del-button-cart">
                   <span>{item.name}</span><br />
                   <button onClick={() => removeFromCart(item.id)}>&times;</button>
                   </div>
                   <span className="product-price">{item.price} Kč</span><br />
                   <div className="buttons-cart">
                   <button className="left-button" onClick={() => decrementItem(item.id)}> - </button>
                   <span>{item.quantity} </span>
                   <button className="right-button" onClick={() => incrementItem(item.id)}> + </button>
                   </div>
                 </div>
                 </div>
                 
             ))}   
             {/* <div className="total-cost">
                 <strong>Total:</strong> {getTotalCost()}  Kč      
                 </div> */}
            {/* <div className="proceed-button"> */}
                {/* <button  onClick={()=> proceedToOrder() }> */}
                {/* <button data-modal-target="#modal" className="proceed-button">Proceed to order {getTotalCost()} Kč</button> 
                <div className="modal" id="modal">
                <div className="modal-header">
                <button data-close-button className="close-modal-button">&times;</button>
                </div>
                <div className="modal-body">Your order is completed!</div>
                </div>
                <div id="overlay"></div> */}
            {/* </div> */}
            
            {/* <div className="proceed-button">
                        <button onClick={openModal}>Proceed to order {getTotalCost()} Kč</button>
            </div>
            {modalIsOpen && (
                <div className="modal" id="modal">
                    <div className="modal-header">
                        <button onClick={closeModal} className="close-modal-button">&times;</button>
                    </div>
                    <div className="modal-body">Your order is completed!</div>
                </div>
            )}

        {modalIsOpen && <div id="overlay"></div>} */}

        <div className="payment-button">
        <Link to='/registration-form'><button>Proceed to payment {getTotalCost()} Kč</button></Link>
        </div>
    </div>
     )}
    </div>
 )
}

export default Cart;