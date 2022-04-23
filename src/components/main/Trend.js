import React from 'react'
import SingleProduct from '../product/SingleProduct'

const Trend = () => {
  return (
    <section className="trending-product section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h2>Trending Product</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <SingleProduct/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <SingleProduct/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <SingleProduct/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <SingleProduct/>
                </div>
              </div>
        </div>
    </section>
  )
}

export default Trend