import React from 'react';
import Img1 from "../images/small.jpg"
import Img2 from "../images/large.jpg"
import "./styles/rooms.css";


const Rooms = () => {
  
  return (
    <div>
      <section className="section__container room__container" id="rooms">
      <p className="section__subheader">OUR LIVING ROOM</p>
      <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
      <div className="room__grid">
        <div className="room__card" data-sr-id="10" >
          <div className="room__card__image">
            <img src={Img1} alt="room"/>
            <div className="room__card__icons">
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-paint-fill"></i></span>
              <span><i className="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div className="room__card__details">
            <h4>Cozy Haven Room</h4>
            <p>
              Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
            </p>
            <h5>Starting from <span>Rs. 1000/night</span></h5>
            <a href="https://wa.link/at5ion">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
        <div className="room__card" data-sr-id="11">
          <div className="room__card__image">
            <img src={Img2} alt="room"/>
            <div className="room__card__icons">
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-paint-fill"></i></span>
              <span><i className="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div className="room__card__details">
            <h4>Spacious Serenity Suite</h4>
            <p>
              Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
            </p>
            <h5>Starting from <span>Rs. 1500/night</span></h5>
            <a href="https://wa.link/at5ion">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Rooms