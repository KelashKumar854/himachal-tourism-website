import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import './../styles/EnquireForm.css'

const EnquireForm = () => {
  return (
    <div>
      <div className='form-main'>
        <div className='form-container'>
          <div className='form'>
            <h3>
              Enquire Now!
            </h3>
            <p>
              <i className='check-icon'><FaCheckCircle color='#02ad88'/></i>
              100% Customized Tour Quotes for Himachal Tourism Holiday Packages
            </p>
            <p>
              <i className='check-icon'><FaCheckCircle color='#02ad88'/></i>
              Simply fill the form & let our tour advisor contact you & provide you best deal
            </p>
            <form action="">
              <div className='form-input'>
                <input type="text" placeholder='Enter Your Name'/>
              </div>
              <div className='form-input'>
                <input type="email" placeholder='Enter Your Email'/>
              </div>
              <div className='form-input'>
                <input type="tel" placeholder='Enter Your Phone'/>
              </div>
              <button className='form-btn'>GET YOUR QUOTE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnquireForm;
