// https://www.youtube.com/watch?v=WbV3zRgpw_E&t=6960s
import React, { useState }  from 'react'


// import Hero from './components/Hero/Hero'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer' 



import Navbar2 from './components/Navbar2/Navbar2'

// Screen
import ContactInfo from './screens/contactinfo/ContactInfo'
import HomePage from './screens/homepage/HomePage'
import Publications from './screens/publications/Publications'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// import Services from './Components/Screens/Services/Services'
// import Products from './Components/Screens/Products/Products'

const App = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <Router>
      <Navbar2/>
        <div className="container">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactInfo />} />
              <Route path="/publications" element={<Publications />} />
          </Routes>
        </div>
    </Router>

  )
}

export default App