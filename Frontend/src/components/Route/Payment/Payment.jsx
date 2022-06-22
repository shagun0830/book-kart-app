import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Payment.css"

export function Payment() {

    const navigate = useNavigate()
    const changePath = () => {
        navigate("/success");
    }
    
  return (
    <div id="payment-section">
        <div className='pay-head'>
            <h2><span>Billing and Pay Information</span></h2>
            <p><em>Choose a payment option below and fill out the appropriate information</em></p>
        </div>
        <div className='pay-method-cards'>
            <div className='pay-method-card box-shadow'> <i class="fa-solid fa-credit-card"></i><br/>Credit Card</div>
            <div className='pay-method-card box-shadow'><i class="fa-solid fa-gift"></i><br/> Gift Card</div>
            <div className='pay-method-card box-shadow'><i class="fa-brands fa-paypal"></i><br/>PayPal</div>
        </div>
        <div className='pay-infoBlock'>
              <div className='billAddress'>
                    <div className='billAddress-head'>
                        <h3><span className='circleNum'>1</span> Billing Address</h3>
                    </div>
                   <form action="#" className='bill-form'>
                       <input type="text" className='bill-control input-control' placeholder='FULL NAME' required />
                       <input type="number" className='bill-control input-control' placeholder='MOBILE NUMBER ' required />
                       <input type="text" className='bill-control input-control' placeholder='ADDRESS 1' required />
                       <input type="text" className='bill-control input-control' placeholder='ADDRESS 2' required />
                       <input type="text" className='bill-control input-control' placeholder='CITY' required />
                       <div className='splitter'>
                            <input type="text" className='bill-control input-control' placeholder='STATE' required />
                            <input type="number" className='bill-control input-control' placeholder='ZIPCODE' required />
                       </div>
                   </form>
              </div>
              <div className='ccInfo'>
              <div className='billAddress-head'>
                        <h3><span className='circleNum'>2</span> Credit Card Info</h3>
                    </div>
                   <form action="#" className='credit-form'>
                       <input type="text" className='credit-control input-control' placeholder='CARD HOLDER NAME' required />
                       <input type="number" className='credit-control input-control' placeholder='CARD NUMBER' required />
                       <input type="number" className='credit-control input-control' placeholder='CVV NUMBER' required />
                       <div className='splitter'>
                            <input type="number" className='credit-control input-control' placeholder='EXP MONTH' required />
                            <input type="number" className='credit-control input-control' placeholder='EXP YEAR' required />
                       </div>
                   </form>
              </div>
        </div>
        <div className='continue-container'>
                <div className='liner'></div>
               <button className='hover-btnEffect box-shadow' onClick={changePath}>Continue</button>
               <div className='liner'></div>
        </div>
    </div>
  )
}
