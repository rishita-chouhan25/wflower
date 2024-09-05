import React from 'react';
import room1 from "./images/room11.avif"
import room2 from "./images/room12.avif";
import { motion } from "framer-motion";
import { fadeIn} from "../variants"

const Room = () => {
  return (
    <div>
        <section className="section__container room__container" id="rooms">
      <p className="section__subheader">OUR LIVING ROOM</p>
      <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
      <div className="room__grid">
        <motion.div variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true}} 
          className="room__card">
          <div className="room__card__image">
            <img src={room2} alt="room"/>
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
            <h5>Starting from <span>Rs. 2000/night</span></h5>
            <a href="https://api.whatsapp.com/send?phone=919329717846">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true}}
         className="room__card" data-sr-id="11">
          <div className="room__card__image">
            <img src={room1} alt="room"/>
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
            <h5>Starting from <span>Rs. 2500/night</span></h5>
            <a href="https://api.whatsapp.com/send?phone=919329717846">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default Room
