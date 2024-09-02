import React from 'react';
import Old from "./images/oldskool-photography-152258-unsplash.jpg";
import rr1 from "./images/rr1.jpg";
import room1 from "./images/room11.avif";
import rr2 from "./images/rr2.jpg";
import room2 from "./images/room12.avif";
import flower from "./images/white-flower.webp";
import balcony from "./images/balcony.jpg";
import guest from "./images/guest.jpeg";
import Hotel from "./images/Hotel.avif";
import road from "./images/road.jpg";
import "./styles/style.css";

const Gallery = () => {
  return (
    <div>
        <section id="gallary">
      <div className="about__content">
        <p className="section__subheader" style={{textAlign:"center"}}>GALLARY</p> </div>
        <br/>
      <div className="container11">
        <div className="box11 a"><img src={Old} alt="Out"/></div>
        <div className="box11 b"><img src={rr1} alt="Ayodhya"/></div>
        <div className="box11 c"><img src={room1} alt="Large"/></div>
        <div className="box11 d"><img src={rr2} alt="Palash"/></div>
        <div className="box11 e"><img src={room2} alt="Small"/></div>
        <div className="box11 f"><img src={flower} alt="Baranti"/></div>
        <div className="box11 g"><img src={balcony} alt="Recep"/></div>
        <div className="box11 h"><img src={guest} alt="Flower"/></div>
        <div className="box11 j"><img src={Hotel} alt="Room1"/></div>
        <div className="box11 i"><img src={road} alt="Mithondam"/></div>
      </div>
    </section>
    </div>
  )
}

export default Gallery