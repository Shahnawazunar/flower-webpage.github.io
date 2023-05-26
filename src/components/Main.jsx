import React from 'react'

import './Main.css'
function Main() {
  return (
    <>
   
    <div id="carouselExampleCaptions" className="carousel slide carasol-hero-page " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/1100x450/?flower,Roses flowers" className="d-block w-100" alt="hero page"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Rose delivery online</h5>
        <p>Single stem rose delivery is the most popular of the red roses to send. Choose from various rose bouquets, which red roses to send.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1100x450/?flower,Lily flowers" className="d-block w-100" alt="hero page"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>beautiful lily bouquet delivery! </h5>
        <p>We have lilies for delivery anywhere in the US. Our selection includes stargazer, Peruvian.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1100x450/?flower,Mason Jar Flower" className="d-block w-100" alt="hero page"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Mason Jar Flower Delivery</h5>
        <p>Send a mason jar flowers arrangement today anywhere in the US! Mason jar flower arrangements are a unique gift .</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Main
