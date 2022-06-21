import React from "react";
import "./About.css";

export function About() {
  return (
    <section id="about-section">
      <div className="about-container">
        <h1 className="about-head">
          About <span>Us</span>
        </h1>
        <h2>Thank you for using <span>Book-Kart!</span></h2>
        <p>A BETTER WAY TO BUY BOOKS ONLINE</p>
        <p>
          <b>Our Mission</b>: To help local, independent bookstores thrive in
          the age of ecommerce.
        </p>
        <p>
          <b>Our Vision</b>: We work to connect readers with independent
          booksellers all over the world. We believe local bookstores are
          essential community hubs that foster culture, curiosity, and a love of
          reading, and we're committed to helping them survive and thrive. Our
          platform gives independent bookstores tools to compete online and
          financial support to help them maintain their presence in local
          communities.
        </p>
        <p>
          <em>“The Rebel Alliance standing up to the Amazon Empire.”</em> —
          Chicago Tribune
        </p>
        <p>
          <b>Our Story</b>: Book-Kart began as an idea to help support
          bookstores and their communities at a time when more and more people
          were buying their books online. We saw an opportunity to create an
          alternative to Amazon for socially-conscious online shoppers. Amazon
          sells over 60% of all books in the US and is growing. That shift
          threatens the future of bookstores and will hurt readers, authors, and
          publishers who rely on a diverse, healthy ecosystem for books.{" "}
          <b>
            We had a better idea — give readers the convenience of online
            shopping while supporting independent bookstores at the same time
          </b>
          .
        </p>
        <h2>Do you have questions? Read the FAQ or please Contact Us.</h2>
        <h2>FAQ:</h2>
        <div className="faq-accordion">
          <details>
            <summary><b>Can I partner or advertise with Book-Kart?</b></summary>
            <p>
              For partnerships and promotions, contact promotions@bookkart.example.
              For advertising, contact ads@bookkart.example.
            </p>
          </details>
          <details>
            <summary>
              <b>Does Book-Kart ship to Canada or internationally?</b>
            </summary>
            <p>
            Book-Kart only ships to the US, but we do have Bookshop UK and
              Bookshop Spain available for those regions.
            </p>
          </details>
          <details>
            <summary>
             <b> How do I report a problem with the website or my order?</b>
            </summary>
            <p>
              <a href="/ContactUs"><span>Contact Us</span></a>
            </p>
          </details>
          <details>
            <summary>
              <b>What do I do if I've received a damaged, incorrect, or otherwise
              defective order?</b>
            </summary>
            <p>
              If you have received damaged, defective, or incorrectly shipped
              merchandise please contact customer service <a href="#"><span>here.</span></a>
            </p>
          </details>
          <details>
            <summary>
              <b>How do I return an order if I receive a book that I don't want?</b>
            </summary>
            <p>
              You may return an unwanted item within 14 days of the delivery
              date for a full refund of the cost of the books returned including
              initial shipping costs. To ensure your package is returned
              correctly, please return the package to the address indicated
              below and display the order number prominently on the packaging.
              Return postage is to be covered by the sender. If you have any
              further questions regarding your return please reach out <a href="#"><span>here.</span></a>
            </p>
          </details>
          <details>
            <summary><b>Why does Book-Kart discount books?</b></summary>
            <p>
              We are still experimenting with discounting. If we find discounts
              are necessary to be a viable alternative for our customers, we may
              continue to discount books. But to minimize the price difference
              between in-store purchases and online purchases, we will limit
              discounts to 10% and under. All discounts come out of
              Book-Kart's share of the profits, not the bookstores.
            </p>
          </details>
          <details>
            <summary>
            <b>If my question isn't answered here?</b>
            </summary>
            <p>
            Ask us a question: info@bookkart.example.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
