import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"



const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
          <h1>Peter Zorve</h1>
          <h3>Data Scientist</h3>
          <p>
            I have over twelve years of experience in academia as a teacher, data scientist, and researcher. 
            While I thrived in teaching and research, I became increasingly concerned about my country's 
            education system. In 2022, I co-founded EduZolve with Olusegun Akinyemi. Driven by a desire 
            to give back to the community, I envisioned EduZolve Oy as a solution to the educational 
            challenges facing West African students. The company is well-positioned to make a positive impact.
          </p>
          <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
        </div>
        
    </div>
  )
}

export default Hero


