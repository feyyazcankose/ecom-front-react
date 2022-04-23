import React from 'react'
import SingleSlider from './SingleSlider'
import { Carousel } from 'react-responsive-carousel';
const Sliders = () => {
  return (
    <div className="hero-slider">
      <Carousel  autoPlay infiniteLoop  dynamicHeight stopOnHover showThumbs={false} showStatus={false} showIndicators={false}> 
        <SingleSlider/>
        <SingleSlider/>
      </Carousel>
    </div>
  )
}

export default Sliders