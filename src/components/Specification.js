import React from 'react'
import { FaMapMarkerAlt, FaUsers, FaBuilding, FaHome } from "react-icons/fa";
import './../styles/Specification.css'

const Specification = () => {
  return (
    <div>
      <div className='specification-main'>
        <div className="specification-container">
            <div className='specification-heading'>
                <h3>
                    We Are Here For You
                </h3>
                <p>
                  We have proudly been voted the #1 travel company in the area for the past twenty-five years for hospitality, services &amp; Transport. We offer personalized attention to the leisure and business traveller and will do our best to tend to your needs.
                </p>
            </div>
            <div className="specification-row">
              <div className='specification-coloums'>
                  <span>
                  <FaMapMarkerAlt className='fa-logo'/>
                  </span>
                  <h3>200+</h3>
                  <p>Total Destinations</p>
              </div>
              <div className='specification-coloums'>
                  <span>
                  <FaUsers className='fa-logo'/>
                  </span>
                  <h3>100+</h3>
                  <p>Professional Agents</p>
              </div>
              <div className='specification-coloums'>
                  <span>
                  <FaBuilding className='fa-logo'/>
                  </span>
                  <h3>27+</h3>
                  <p>Current Packages in Progress</p>
              </div>
              <div className='specification-coloums'>
                  <span>
                  <FaHome className='fa-logo'/>
                  </span>
                  <h3>700+</h3>
                  <p>Hotels Available</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Specification;
