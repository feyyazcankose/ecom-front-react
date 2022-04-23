import React from "react";
import SingleBanner from '../banner/SingleBanner'
const Catagores = () => {
  return (
    <section className="banner section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <SingleBanner/>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <SingleBanner/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catagores;
