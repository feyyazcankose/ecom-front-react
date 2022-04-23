import React from 'react'
import Banner from './Banner'
import Sliders from './Sliders'

const Hero = () => {
  return (
      <section className="hero-area">
        <div className="container">
          <div className="row">
          <div className="col-lg-8 col-12 custom-padding-right">
            <div className="slider-head">
              <Sliders />
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                <Banner classList="hero-small-banner" />
              </div>
              <div className="col-lg-12 col-md-6 col-12 ">
                <Banner classList="hero-small-banner  style2" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default Hero