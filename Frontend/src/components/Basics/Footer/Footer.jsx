import React from "react";
import Logo from "../../../images/Logo.png"
import "./Footer.css";
export function Footer() {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="f-1">
          <div className="footer-logo center">
            <img src={Logo} alt="logo" width="90"/>
            <h2>book-kart</h2>
          </div>
        </div>
        <div className="f-2">
        <h1>Explore</h1>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Site map</a>
            </li>
            <li>
              <a href="/Login">Sign in/Join</a>
            </li>
          </ul>
        </div>
        <div className="f-3">
          <h1>Our Service</h1>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Store Pickup</a>
            </li>
            <li>
              <a href="#">Accessibilty</a>
            </li>
          </ul>
        </div>
        <div className="f-4">
          <h1>Help</h1>
          <ul>
            <li>
              <a href="#"><span><b>+91-9735622342/43</b></span></a>
            </li>
            <li>
              <a href="#">Monday-Friday: 9:00-20:00</a>
            </li>
            <li>
              <a href="#">Saturday: 10:00-15:00</a>
            </li>
            <li>
              <a href="#">book.kart@example.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright center">
        <p className="footer-copyright-line">
          Copyright&copy; 2022 Book-Kart. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}