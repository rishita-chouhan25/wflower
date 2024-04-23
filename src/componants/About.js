import React from 'react';
import "./styles/about.css";
import Aboutimg from "../images/out.jpg"

const About = () => {
  return (
    <div classNameName='container'>
      <section className="section__container about__container" id="about">
        <div className="about__image">
          <img src={Aboutimg} alt="about" data-sr-id="3" />
        </div>
        <div className="about__content">
          <p className="section__subheader" data-sr-id="4" >ABOUT US</p>
          <h2 className="section__header" data-sr-id="6" >The Best Holidays Start Here!</h2>
          <p className="section__description" data-sr-id="7" >
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay. <br />
          </p><h3><a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA" className='address'>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></h3>
          <h3><a href="tel:+919007062180" className='contact'> Contact us: +91 9007062180 </a></h3>
          <br />
          <div className="about__btn" data-sr-id="8" >
            <a href="https://wa.link/at5ion">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About