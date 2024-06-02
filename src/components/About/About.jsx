import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icom from "../../assets/play-icon.png"

const About = ( {setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icom} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Education Tomorrow's Leaders</h2>
            <p>Browser Console: Open your browser's developer console (usually by pressing F12) and look for any JavaScript errors or warnings. These can often pinpoint syntax mistakes or issues with component rendering.
                Linting: If you're using a linter like ESLint, make sure you've run it to identify potential errors or style issues that might be preventing proper rendering
            </p>
        </div>
    </div>
  )
}

export default About



