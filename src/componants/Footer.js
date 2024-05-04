import React from 'react';
import facebook from "./images/facebook.png";
import insta from "./images/instagram.png";
import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png"

const Footer = () => {
  return (
    <div>
        <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo">
            <a href="#home"> <h4>Kingsukh Guest House</h4></a>
          </div>
          <p className="section__description">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <a href="https://wa.link/at5ion">
            <button className="btn">BOOK NOW</button>
          </a>
        </div>
        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul className="footer__links">
            <li><a href="#">Browse Destinations</a></li>
            <li><a href="#">Special Offers &amp; Packages</a></li>
            <li><a href="#">Room Types &amp; Amenities</a></li>
            <li><a href="#">Customer Reviews &amp; Ratings</a></li>
            <li><a href="#">Travel Tips &amp; Guides</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>OUR SERVICES</h4>
          <ul className="footer__links">
            <li><a href="#">Concierge Assistance</a></li>
            <li><a href="#">Flexible Booking Options</a></li>
            <li><a href="#">Airport Transfers</a></li>
            <li><a href="#">Wellness &amp; Recreation</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>CONTACT US</h4>
          <ul className="footer__links">
            <li><a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></li>
            <li><a href="mailto: kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></li>
            <li><a href="tel:+919007062180">+91 9007062180 </a></li>
          </ul>
          <div className="footer__socials">
            <a href="#"><img src={facebook} alt="facebook"/></a>
            <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank"><img src={insta} alt="instagram"/></a>
            <a href="#"><img src={youtube} alt="youtube"/></a>
            <a href="#"><img src={twitter} alt="twitter"/></a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer