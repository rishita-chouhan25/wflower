import React from 'react'
import "./styles/banner.css";


const Banner = () => {
  return (
    <div className='container'>
        <section class="section__container banner__container">
      <div class="banner__content">
        <div class="banner__card">
          <h4>100+</h4>
          <p>Bookings Completed</p>
        </div>
        <div class="banner__card">
          <h4>150+</h4>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Banner