import React from 'react'

const Slider = () => {
  return (
    <div className="single-slider"
        style={{backgroundImage: 'url(https://via.placeholder.com/800x500)'}}>
        <div className="content">
            <h2><span>Big Sale Offer</span>
                Get the Best Deal on CCTV Camera
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                labore dolore magna aliqua.</p>
            <h3><span>Combo Only:</span> $590.00</h3>
            <div className="button">
                <a href="product-grids.html" className="btn">Shop Now</a>
            </div>
        </div>
    </div>
  )
}

export default Slider