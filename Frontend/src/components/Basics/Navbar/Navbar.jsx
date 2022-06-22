import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/Logo.png"
import "./Navbar.css";

export function Navbar() {
    
    const [open, setOpen] = useState(false)  // open value = false
    //     current, updatedValue = 
    
    const handleClick = () => setOpen(!open) // open value = true
    
  return (
    <div className="box-shadow">
      <div id="nav-top-container" className="nav-top-container">
        <div className="general">
          <Link to="/login">LOGIN</Link>
          <Link to="/register">REGISTER</Link>
          <Link to="/cart">
          <i class="fa-solid fa-cart-shopping"></i> Cart
          </Link>
          <Link to="/contactUs">Contact us: <span>+91-9735622342/43</span></Link>
        </div>
      </div>
      <nav id="navbar" className="center">
        <div className="logo-section center">
           <Link to="/">
             <div className="nav-logo center">
                <img src={Logo} alt="logo" width="70" />
                <h2>book-kart</h2>
             </div>
           </Link>
          <div className="hamburger-icon">
          <i class="fa fa-bars" aria-hidden="true" onClick={handleClick}></i>
          </div>
        </div>
        <div id="nav-items" className={open ?"nav-items responsive center" : "nav-items center"}>
          <ul id="list" className="list center">
            <Link to="/">
              <li className="list-item">Home</li>
            </Link>
            <Link to="#">
              <li className="list-item hover-dropdown">Category</li>
                <ul className="sub-list">
                  <li className="sub-list-item">Horror</li>
                  <li className="sub-list-item">Comedy</li>
                  <li className="sub-list-item">Novel</li>
                  <li className="sub-list-item">Romance</li>
                  <li className="sub-list-item">Thriller</li>
                  <li className="sub-list-item">Poem</li>
                  <li className="sub-list-item">Sci-Fi</li>
                </ul>
            </Link>
            <Link to="/shop">
              <li className="list-item">Shop</li>
            </Link>
            <Link to="/about">
              <li className="list-item">About</li>
            </Link>
            <Link to="#">
              <li className="list-item">Demo</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
