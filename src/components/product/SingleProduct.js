import React from 'react'

const SingleCard = () => {
  return (

                    <div className="single-product">
                        <div className="product-image">
                            <img src="https://via.placeholder.com/335x335" alt="#"/>
                            <div className="button">
                                <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="product-info">
                            <span className="category">Watches</span>
                            <h4 className="title">
                                <a href="product-grids.html">Xiaomi Mi Band 5</a>
                            </h4>
                            <ul className="review">
                                <li><i className="lni lni-star-filled"></i></li>
                                <li><i className="lni lni-star-filled"></i></li>
                                <li><i className="lni lni-star-filled"></i></li>
                                <li><i className="lni lni-star-filled"></i></li>
                                <li><i className="lni lni-star"></i></li>
                                <li><span>4.0 Review(s)</span></li>
                            </ul>
                            <div className="price">
                                <span>$199.00</span>
                            </div>
                        </div>
                    </div>
  )
}

export default SingleCard