import React, { useState } from 'react';
import "./styles/style.css"
import { motion } from "framer-motion";
import { fadeIn } from "../variants"



const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <header className="header">
                <nav>
                    <div className="nav__bar">
                        <div className="logo">
                            <a href="https://wa.link/at5ion">
                                <span style={{ color: 'aliceblue' }}>
                                    WhiteFlower <br /> Guest House
                                </span>
                            </a>
                        </div>
                        <div
                            className="nav__menu__btn"
                            id="menu-btn"

                        >
                            <i className="ri-menu-line" onClick={toggleMenu}></i>
                        </div>
                    </div>
                    <ul className={isMenuOpen ? "nav__links open" : "nav__links"}>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#service">Services</a>
                        </li>
                        <li>
                            <a href="#rooms">Rooms</a>
                        </li>
                        <li>
                            <a href="#gallary">Gallary</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <a href="https://wa.link/at5ion">
                        <button className="btn nav__btn">BOOK NOW</button>
                    </a>
                </nav>
                <div className="section__container header__container" id="home">
                    <motion.p
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true }}
                    >Simple - Unique - Friendly</motion.p>
                    <motion.h1
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true }} data-sr-id="2">Make Yourself At Home<br />In Our <span>Guest House</span>.</motion.h1>
                </div>
            </header>
            <section className="section__container booking__container">
                <div className="booking__form">
                    <div className="input__group input__btn">
                        <a href="https://wa.link/at5ion">
                            <button className="btn">BOOK NOW</button>
                        </a>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Home