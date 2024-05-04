import React from 'react';
import Out from "./images/out.jpg";
import Ayodhya from "./images/ayodhya.webp";
import Large from "./images/large.jpg";
import Palash from "./images/palash.webp";
import Small from "./images/small.jpg";
import Baranti from "./images/baranti.webp";
import Recep from "./images/recep.jpg";
import Flower from "./images/flower.jpg";
import Room1 from "./images/room1.jpg";
import Mithondam from "./images/mithonDam.webp";
import "./styles/style.css";

const Gallery = () => {
  return (
    <div>
        <section id="gallary">
      <div className="about__content">
        <p className="section__subheader" style={{textAlign:"center"}}>GALLARY</p> </div>
        <br/>
      <div className="container11">
        <div className="box11 a"><img src={Out} alt="Out"/></div>
        <div className="box11 b"><img src={Ayodhya} alt="Ayodhya"/></div>
        <div className="box11 c"><img src={Large} alt="Large"/></div>
        <div className="box11 d"><img src={Palash} alt="Palash"/></div>
        <div className="box11 e"><img src={Small} alt="Small"/></div>
        <div className="box11 f"><img src={Baranti} alt="Baranti"/></div>
        <div className="box11 g"><img src={Recep} alt="Recep"/></div>
        <div className="box11 h"><img src={Flower} alt="Flower"/></div>
        <div className="box11 j"><img src={Room1} alt="Room1"/></div>
        <div className="box11 i"><img src={Mithondam} alt="Mithondam"/></div>
      </div>
    </section>
    </div>
  )
}

export default Gallery