import React from "react";
import './App.css';
import { Link, Outlet, useLocation} from "react-router-dom";
import Search  from "./Search.js";
import ImgLogo from './img/shopping-bag.png';
import { useCart } from './CartContext';
 
function Header () {
    const location = useLocation();
    const {getTotalQuantity} = useCart();
    return (
        <>
        <div className="main-page">
        <div className="top-of-main-page">
        <Search />
        <h2>Bread Bakery</h2> 
            <ul className="ul-of-header">
            <li><Link to='/' className={location.pathname === "/" ? "active" : ""}>Bakery</Link></li>
            <li><Link to='/burgers' className={location.pathname === "/burgers" ? "active" : ""}>Burgers</Link></li>
            <li><Link to='/cocktails' className={location.pathname === "/cocktails" ? "active" : ""}>Cocktails</Link></li>
            <li><Link to='/desserts' className={location.pathname === "/desserts" ? "active" : ""}>Desserts</Link></li>
            <li><Link to='/cart' className={location.pathname === "/cart" ? "active" : ""}>Cart</Link></li>
            </ul>
            <button className="cart-button" id='cart-button'>
             <Link to='/cart'>
            <img className="img-logo" src={ImgLogo} alt='cart'/>
            <div className="cart-num" id='cart-num'>{getTotalQuantity()}</div>
            </Link>
            </button>
            </div>
            <div className="content">
            <Outlet />
            </div>
            </div> 
        </>
        )}

export default  Header;