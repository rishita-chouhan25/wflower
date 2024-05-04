import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants"

const Service = () => {
  return (
    <div>
        <section className="service" id="service">
      <div className="section__container service__container">
        <div className="service__content">
          <p className="section__subheader">SERVICES</p>
          <h2 className="section__header">Strive Only For The Best.</h2>
          <ul className="service__list">
            <motion.li data-sr-id="13" variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true}}>
              <span><i className="ri-shield-star-line" ></i></span>
              High className Security
            </motion.li>
            <motion.li data-sr-id="13" variants={fadeIn("left", 0.35)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true}}>
              <span><i className="ri-24-hours-line"></i></span>
              24 Hours Room Service
            </motion.li>
            <motion.li data-sr-id="13" variants={fadeIn("left", 0.45)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}>
              <span><i className="ri-restaurant-2-fill"></i></span>
              Restaurant
            </motion.li>
            <motion.li data-sr-id="13" variants={fadeIn("left", 0.55)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true}} >
              <span><i className="ri-map-2-line"></i></span>
              Tourist Guide Support
              </motion.li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Service