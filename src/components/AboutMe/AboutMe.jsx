import React from 'react'
import "./AboutMe.css"
import img_1 from "../../assets/img/about-me.png"

const  AboutMe = () => {
    return (
      <div className="about">
        <div className="about-img">
          <img src={img_1} alt="" />
        </div>

          <div className="about-content">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              officiis sit debitis omnis harum sed veniam quasi dicta accusamus
              recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
              tempora numquam sint odit optio.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              officiis sit debitis omnis harum sed veniam quasi dicta accusamus
              recusandae?
            </p>
          </div>
  
      </div>
    );
  }

export default AboutMe
  