import React from 'react'

const Banner = ({classList}) => {
  return (
            
            <div className={classList} style={{backgroundImage: 'url(https://via.placeholder.com/370x250)'}}>
            
                <div className="content">
            
                    <h2>
            
                        <span>New line required</span>
            
                        iPhone 12 Pro Max
            
                    </h2>
            
                    <h3>$259.99</h3>
            
                </div>
            
            </div>
  )
}

export default Banner