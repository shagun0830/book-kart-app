import React, { useState, useEffect } from "react";
import Banner1 from "../../../images/banner1.jpeg";
import Banner2 from "../../../images/banner2.jpg";
import Banner3 from "../../../images/banner3.jpg";
import lmBanner from "../../../images/lm-banner.png";
import SubsImage from "../../../images/SubsImage.png";
import toast, { Toaster } from "react-hot-toast";
import "./Header.css";
import { useCart } from "react-use-cart";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

export function Card(props) {
  const { addItem } = useCart();
  const notify = () => toast("Item added to cart", { duration: 1500 });

  return (
    <div className="card" key={props.id}>
      <div className="card-front">
        <div className="card-image">
          <img src={props.image} alt="card-image" />
        </div>
        <div className="card-content">
          <p>
            <b>{props.title}</b>
          </p>
          <p style={{ fontSize: ".85rem" }}>
            <em>(-{props.author})</em>
          </p>
          <div className="rating" style={{ marginBottom: ".5rem" }}></div>
          <h3>
            <span>Price: ${props.price}</span>
          </h3>
        </div>
      </div>
      <div className="card-overlayMiddle" onClick={() => addItem(props.card)}>
        <button className="hover-btnEffect" onClick={notify}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export function Header() {
  const [showCard, setShowCard] = useState([]);

  const fetchShowCards = async () => {
    const { data } = await axios.get("/api/showCaseCards");
    setShowCard(data);
  };

  useEffect(() => {
    fetchShowCards();
  }, []);

  return (
    <section id="header-section">
      <header className="header">
        <div className="search-container">
          <form className="search-form">
            <input
              type="search"
              className="search-control box-shadow"
              placeholder="Search for your books"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>

        <Carousel autoPlay="true" infiniteLoop="true"  className="carousel">
          <div className="banner-container">
            <div className="banner-image">
              <img src={Banner1} alt="banner1" width="100%" />
            </div>
            <div className="banner-content">
              <h4>A SALE FOR THE PAGES</h4>
              <h1>50% Off Hundreds of Books</h1>
              <h5>
                <span>Online And In Stores Only</span>
              </h5>
              <a href="#" className="banner-imgBtn">
                Shop Now <i class="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="banner-container">
            <div className="banner-image">
              <img src={Banner2} alt="banner2" width="100%" />
            </div>
          </div>
          <div className="banner-container">
            <div className="banner-image">
              <img src={Banner3} alt="banner3" width="100%" />
            </div>
          </div>
        </Carousel>

        <div className="book-showcase">
          <div className="showcase-head">
            <h1>Best Selling Books</h1>
            <a href="#" className="viewAll hover-btnEffect box-shadow">
              View All
            </a>
          </div>
          <div className="showcase">
            {showCard.map((card) => {
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
        <div className="learn-more">
          <div className="lm-image">
            <img src={lmBanner} alt="Banner" width="100%" />
          </div>
          <div className="lm-content">
            <h1>Find Your Favorite Books Here</h1>
            <p>
              Book-Kart regulary publishes fascinating features about a huge
              variety of bookish subjects, publishes and interesting characters
              in literature and notable anniversaries.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="book-showcase">
          <div className="showcase-head">
            <h1>Popular Books</h1>
            <a href="#" className="viewAll hover-btnEffect box-shadow">
              View All
            </a>
          </div>
          <div className="showcase">
            {showCard.map((card) => {
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

        <div className="subs-container">
          <div className="subs-content">
            <h1>
              <b>Join the community</b>
            </h1>
            <p>
              Enter your email address to receive regular updates, as well as
              news on upcoming events and specific offers.
            </p>
            <form action="#" className="subs-form">
              <input
                type="text"
                className="subs-textField box-shadow"
                placeholder="Your Email Address"
              />
              <input
                type="submit"
                className="subs-submit hover-btnEffect box-shadow"
                value="Subscribe"
              />
            </form>
          </div>
          <div className="subs-image">
            <img src={SubsImage} alt="" width="60%" />
          </div>
        </div>
      </header>
    </section>
  );
}
