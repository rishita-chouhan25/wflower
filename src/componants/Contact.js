import React from 'react';
import "./styles/contact.css";
import Location from "../images/location.png";
import Mail from "../images/mail.png"
import Call from "../images/call.png";
import Facebook from "../images/contactFacebook.png";
import Insta from "../images/contactInsta.png";
import Twitter from "../images/contactTwitter.png"
import Linkdln from "../images/contactLinkdln.png"


const Contact = () => {
  return (
    <div>
      <section id="contact" className="section1">
      <div className="container1">
          <div className="contactInfo1"> 
              <div>
                  <h2>Contact Info</h2>
                  <ul className="info">
                      <li>
                          <span><img src={Location}/></span>
                          <span>Beside Barshal Water Tank,<br/>
                            Manpur, Barhanti,<br/>
                            West Bengal 723156</span>
                          
                      </li>
                      <li>
                          <span><img src={Mail}/></span>
                          <span><a href="mailto: kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></span>
                      </li>
                      <li>
                          <span><img src={Call}/></span>
                          <span><a href="tel:+919007062180"> +91 9007062180 </a></span>
                      </li>

                  </ul>
              </div>
              <ul className="sci">
                  <li><a href="#"><img src={Facebook}/></a></li>
                  <li><a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank"><img src={Insta}/></a></li>
                  <li><a href="#"><img src={Twitter}/></a></li>
                  <li><a href="#"><img src={Linkdln}/></a></li>
                  
              </ul>
          </div>
              <div className="contactForm1">
                  <h2>Send a Message</h2>
                  <div className="formBox1">
                  <div className="inputBox1 w50">
                      <input type="text" name="" required=""/>
                      <span>First Name</span>
                  </div>
                  <div className="inputBox1 w50">
                      <input type="text" required=""/>
                      <span>Last Name</span>
                  </div>
                  <div className="inputBox1 w50">
                      <input type="email" required=""/>
                      <span>Email Address</span>
                  </div>
                  <div className="inputBox1 w50">
                      <input type="text" required=""/>
                      <span>Mobile Number</span>
                  </div>
                  <div className="inputBox1 w100">
                      <textarea required=""></textarea>
                      <span>Write your message here...</span>
                  </div>
                  <div className="inputBox1 w100">
                      <input type="submit" value="Send"/>
                  </div>
              </div>
          </div> 
  </div></section>
    </div>
  )
}

export default Contact