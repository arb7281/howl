import React from 'react';
import heroImage1 from "../Images/heroImg1.jpg"
import heroImage2 from "../Images/heroImg2.jpg"
import "../component/Hero.css"


function Hero() {
  return (
    <section className="hero">
      <div className="container custom-container">
        <div className="d-flex">
          <div className="hero-text">
            <p className='text_left'>
              We exist because we want to help you navigate and harness the
              potential of this ever-changing digital landscape.
            </p>
            <p className='hollowText1'>
            Your</p>
            <p className='hollowText2'>
            Growth</p>
            <p className='hollowText3'>
            partners</p>
          </div>

          <div  className="col-md-6 order-md-1  rightsection">
            <div className='position-relative'>
              <img
                src={heroImage1}
                alt="Hero Image 1"
                className="img-fluid image1 custom-image"
              />
              <img
                src={heroImage2}
                alt="Hero Image 2"
                className="hero-image2 img-fluid position-absolute custom-image image2"
                style={{ bottom: -140, right: 85, height: 200 }}
              />
            </div>
            <div className="right_text">
              <p>
                It's not a game of guesses, it's a game of numbers where growth
                is the ultimate goal. We leverage cutting-edge technology and
                data-driven insights to help you answer questions that unlock
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;