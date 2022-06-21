import React from "react";
import confirmImage from "../../../images/confirmImage.png"
import "./Success.css";

export function Success() {
  return (
    <div id="confirm-section">
      <div className="confirm-container">
        <div className="confirm-image">
            <img src={confirmImage} alt="confirmImage" width="30%"/>
        </div>
        <div className="confirm-content">
          <h2><span>Order Successfully Placed!</span></h2>
          <p>Thanks for placing order <b>RBD19203983</b></p>

          <p>We will send you a notification within 5 days when it ships.</p>
          <p>
            If you have any questions or queries then feel free to get in
            <span> contact us</span>.
          </p>
          <p><em>Keep Reading,</em></p>
        </div>
        <div className="download-container">
          <button>Download Invoice Bill</button>
          <a href="#"><i class="fa-solid fa-arrow-left"></i> &nbsp;Back</a>
        </div>
      </div>
    </div>
  );
}
