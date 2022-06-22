import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./Cart.css";

import EmptyImage from "../../../images/empty.png";

export function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItem,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return (
      <section id="cart-section">
        <div className="empty-cart-container">
          <div className="empty-image">
            <img src={EmptyImage} alt="" width="10%" />
          </div>
          <div className="empty-content">
            <h2>Unfortunately, Your Cart Is Empty</h2>
            <p>Please Add Something In Your Cart</p>
            <Link to="/shop">
              <a className="continue-shop">Continue Shopping</a>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cart-section">
      <div className="full-cart-container">
        <div className="cart-table">
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
              { items.map((item) =>(
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt="" width="100"/>
                    <br />
                    {item.title}
                  </td>
                  <td>
                    ${item.price}
                  </td>
                  <td>
                    <button className="updaterBtn" onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                   <span className="quantity" style={{color:"#000"}}>{item.quantity}</span>
                    <button className="updaterBtn" onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                  </td>
                  <td>
                   <i class="fa-solid fa-trash-can" onClick={()=>removeItem(item.id)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="order-summary">
          <div className="order-container">
               <h2>Order <span>Summary</span></h2>
               <table>
                <tbody>
                  {items.map((item) =>(
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>${item.price * item.quantity}</td>
                    </tr>
                  ))}
                  <tr className="borderTop">
                    <td>Shipping Charges</td>
                    <td>$5</td>
                  </tr>
                  <tr>
                    <td><h2>Total</h2></td>
                      <td><h2>${cartTotal+5}</h2></td>
                      <td></td>
                    </tr>
                </tbody>
               </table>
          </div>
          <div className="checkout">
            <Link to="/payment">
              <a>
                 Checkout
              </a>
              </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
