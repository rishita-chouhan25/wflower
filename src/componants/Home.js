import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/home.css"
import About from './About';
import Rooms from './Rooms';
import Services from './Services';
import Banner from './Banner';
import Gallery from './Gallery';
import Contact from './Contact';
import Map from './Map';
import Footer from './Footer';
import BackToTopButton from "./BacktoTop"

const Home = () => {
    return (
        <div>
            <header>
            <nav>
        <div className="nav__bar">
          <div className="logo">
            <a href="https://wa.link/at5ion"><span style={{color: "aliceblue"}}>Kingsukh <br/> Guest House</span></a>
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <ul className="nav__links" id="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#gallary">Gallary</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <a href="https://wa.link/at5ion">
          <button className="btn nav__btn">BOOK NOW</button>
        </a>
      </nav>
                <div className='container'>
                    <div className="section__container header__container" id="home">
                        <p>Simple - Unique - Friendly</p>
                        <h1>Make Yourself At Home<br />In Our <span>Guest House</span>.</h1>
                    </div>
                </div>
            </header>
        
                    {/* <div classNameName='col-1'></div> */}
                    
                    <section className="booking__container">
                        <div className="booking__form">
                            <div className="input__group input__btn">
                                <a href="https://wa.link/at5ion">
                                    <button className="btn">BOOK NOW</button>
                                </a>
                            </div>
                        </div>
                    </section>
                   
                    {/* <div classNameName='col-1'></div> */}
                
                <About/>
                <Rooms/>
                <Services/>
                <Banner/>
                <Gallery/>
                <Contact/>
                <Map/>
                <Footer/>
                <BackToTopButton />
        </div>
    )
}

export default Home


