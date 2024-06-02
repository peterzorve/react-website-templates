import React from 'react'
import "./HeroSection3.css"
import img_1 from "../../assets/img/hero_img.png"


const HeroSection3 = () => {
    return (
      <div className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm John</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Dolorum, quas. Amet soluta assumenda cum?
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src={img_1} alt="Hero Section" />
        </div>
      </div>
    );
  }

export default HeroSection3