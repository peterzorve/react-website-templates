import React, { useState, useEffect } from 'react'
import "./Navbar2.css"
import logo from "../../assets/logo.png"
// import { Link } from 'react-scroll'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import menu_icon from "../../assets/menu-icon.png"


const Navbar2 = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
      
    })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className='logo'/>
        <div className='double-navbar'>
            <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                <li> <Link to='/'             smooth={true} offset={0}    duration={500} >Home</Link> </li> 

                <li><a href="https://github.com/peterzorve"                       target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                <li><a href="https://www.linkedin.com/in/peter-zorve-51a4b0114/"  target="_blank" rel="noopener noreferrer">LinkedIn</a></li>

                <li> <Link to='/projects'     smooth={true} offset={-260} duration={500} >Projects</Link></li>
                <li> <Link to='/publications' smooth={true} offset={-260} duration={500} >Publications</Link></li>
                <li> <Link to='/contact'      smooth={true} offset={-260} duration={500} className='btn'>Contact me</Link> </li>
            </ul>
       </div>
       <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/> 
    </nav>
  )
}

export default Navbar2



