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
              <li>
                <h3>Filter your Search</h3>
              </li>
              <li>
                <h3 style={{marginBottom:".5rem"}}>Price</h3>
                <form>
                  <div className="filterControl">
                    <input type="radio" id="p-l2h" name="price" value="Price Low to High" />
                    <label htmlFor="p-l2h">Low to High</label>
                  </div>
                  <div className="filterControl">
                    <input type="radio" id="p-h2l" name="price" value="Price High to Low" />
                    <label htmlFor="p-h2l">High to Low</label>
                  </div>
                </form>
              </li>
              <li>
                 <h3 style={{marginBottom:".5rem"}}>Discount</h3>
                <form>
                  <div className="filterControl">
                    <input type="radio" id="d-l2h" name="discount" value="discount Low to High" />
                    <label htmlFor="d-l2h">Low to High</label>
                  </div>
                  <div className="filterControl">
                    <input type="radio" id="d-h2l" name="discount" value="discount High to Low" />
                    <label htmlFor="d-h2l">High to Low</label>
                  </div>
                </form>
              </li>
              <li>
              <h3 style={{marginBottom:".5rem"}}>Order</h3>
                <form>
                  <div className="filterControl">
                    <input type="radio" id="a2z" name="order" value="Ascending" />
                    <label htmlFor="a2z">Ascending</label>
                  </div>
                  <div className="filterControl">
                    <input type="radio" id="z2a" name="order" value="Descending" />
                    <label htmlFor="z2a">Descending</label>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div id="shop-container" className="shop-container">
          <div className="shop-list">
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
