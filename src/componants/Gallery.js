import React from 'react';
import Out from "../images/out.jpg";
import Ayodhya from "../images/ayodhya.webp";
import Large from "../images/large.jpg";
import Palash from "../images/palash.webp";
import Small from "../images/small.jpg";
import Baranti from "../images/baranti.webp";
import Recep from "../images/recep.jpg";
import Flower from "../images/flower.jpg";
import Room1 from "../images/room1.jpg";
import MithonDam from "../images/mithonDam.webp";
import "./styles/gallery.css"


const Gallery = () => {
  return (
    <div>
      <section id="gallary">
      <div class="about__content">
        <p class="section__subheader" style={{textAlign:"center"}}  data-sr-id="5"><span className='galleryhead'>GALLARY</span></p> </div>
        <br/>
      <div class="container11">
        <div class="box11 a"><img src={Out} alt=""/></div>
        <div class="box11 b"><img src={Ayodhya} alt=""/></div>
        <div class="box11 c"><img src={Large} alt=""/></div>
        <div class="box11 d"><img src={Palash} alt=""/></div>
        <div class="box11 e"><img src={Small} alt=""/></div>
        <div class="box11 f"><img src={Baranti} alt=""/></div>
        <div class="box11 g"><img src={Recep} alt=""/></div>
        <div class="box11 h"><img src={Flower} alt=""/></div>
        <div class="box11 j"><img src={Room1} alt=""/></div>
        <div class="box11 i"><img src={MithonDam} alt=""/></div>
      </div>
    </section>
    </div>
  )
}

export default Gallery