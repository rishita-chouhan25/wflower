import React from 'react';
import "./styles/footer.css";
import facebook from "../images/facebook.png";
import insta from "../images/instagram.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png"

const Footer = () => {
  return (
    <div>
        <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="logo">
            <a href="#home" style={{lineHeight:"15px"}}> <h4>Kingsukh Guest <br/> House</h4></a>
          </div>
          <p class="section__description">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <a href="https://wa.link/at5ion">
            <button class="btn">BOOK NOW</button>
          </a>
        </div>
        <div class="footer__col">
          <h4>QUICK LINKS</h4>
          <ul class="footer__links" style={{paddingLeft:"0rem"}}>
            <li><a href="#">Browse Destinations</a></li>
            <li><a href="#">Special Offers &amp; Packages</a></li>
            <li><a href="#">Room Types &amp; Amenities</a></li>
            <li><a href="#">Customer Reviews &amp; Ratings</a></li>
            <li><a href="#">Travel Tips &amp; Guides</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>OUR SERVICES</h4>
          <ul class="footer__links" style={{paddingLeft:"0rem"}}>
            <li><a href="#">Concierge Assistance</a></li>
            <li><a href="#">Flexible Booking Options</a></li>
            <li><a href="#">Airport Transfers</a></li>
            <li><a href="#">Wellness &amp; Recreation</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>CONTACT US</h4>
          <ul class="footer__links" style={{paddingLeft:"0rem"}}>
            <li><a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></li>
            <li><a href="mailto: kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></li>
            <li><a href="tel:+919007062180">+91 9007062180 </a></li>
          </ul>
          <div class="footer__socials">
            <a href="#"><img src={facebook} alt="facebook"/></a>
            <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank"><img src={insta} alt="instagram"/></a>
            <a href="#"><img src={youtube} alt="youtube"/></a>
            <a href="#"><img src={twitter} alt="twitter"/></a>
          </div>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer