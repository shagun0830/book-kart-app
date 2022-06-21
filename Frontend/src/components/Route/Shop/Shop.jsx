import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "../Header/Header";
import { Toaster } from "react-hot-toast";
import "./Shop.css";

export function Shop() {
  const [shopCard, setShopCard] = useState([]);

  const fetchShopCards = async () => {
    const { data } = await axios.get("/api/shopCards");
    setShopCard(data);
  };

  useEffect(() => {
    fetchShopCards();
  }, []);

  return (
    <section id="shop-section">
      <div className="shop-head">
        <h1>
          Time To <span>Shop</span>
        </h1>
      </div>
      <div className="section-content">
        <div id="side-navbar" className="side-navbar">
          <div className="side-navbar-container">
            <ul>
              <Link to="#">
                <li>
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i> MY CART
                </li>
              </Link>
              <Link to="#">
                <li>
                  <i class="fa fa-truck" aria-hidden="true"></i> MY ORDER
                </li>
              </Link>
              <Link to="#">
                <li>
                  <i class="fa fa-gift" aria-hidden="true"></i> COUPON CODE
                </li>
              </Link>
              <Link to="/">
                <li>
                  <i class="fa fa-home" aria-hidden="true"></i> BACK TO HOME
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div id="shop-container" className="shop-container">
          <div className="showcase">
            {shopCard.map((card) => {
              return (
                <Card
                  id={card.id}
                  image={card.image}
                  title={card.title}
                  author={card.author}
                  price={card.price}
                  card={card}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: {
            border: "0",
            padding: "16px",
            color: "#fff",
            backgroundColor: "#d20e0f",
          },
        }}
      />
    </section>
  );
}
