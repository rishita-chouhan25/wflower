import React from 'react';
import "./styles/servic.css"

const Services = () => {
  return (
    <>
      <section className="service" id="service">
        <div className="service__container">
          <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li data-sr-id="13">
                <span><i className="ri-shield-star-line"></i></span>
                High className Security
              </li>
              <li data-sr-id="14">
                <span><i className="ri-24-hours-line"></i></span>
                24 Hours Room Service
              </li>
              <li data-sr-id="15">
                <span><i className="ri-restaurant-2-fill"></i></span>
                Restaurant
              </li>
              <li data-sr-id="16">
                <span><i className="ri-map-2-line"></i></span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services