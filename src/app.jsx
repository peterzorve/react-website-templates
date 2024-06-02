// https://www.youtube.com/watch?v=WbV3zRgpw_E&t=6960s
import React, { useState }  from 'react'


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
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Publications1 from './components/Publications/Publications1'
import Publications2 from './components/Publications/Publications2'
import Publications3 from './components/Publications/Publications3'
import SkillsComponent from './components/SkillsComponent/SkillsComponent'
import AboutMe from './components/AboutMe/AboutMe'
import HeroSection3 from './components/HeroSection3/HeroSection3'
import MyPortfolio from './components/MyPortfolio/MyPortfolio'
import MySkills from './components/MySkills/MySkills'


const App = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>

      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Our Programs" title="What we can offer you"/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subTitle="Testimonials" title="What Others Think"/>
        <Testimonials/>
        <Title subTitle="Contact US" title="Get in Touch"/>
        <Contact/>
        <HeroSection/>
        <Title subTitle="" title="Publications"/>
        <Title subTitle="JOURNAL PUBLICATIONS" title=""/>
        <Publications1/>
        <Title subTitle="Theses" title=""/>
        <Publications2/>
        <Title subTitle="Supervised Masters' Theses" title=""/>
        <Publications3/>
        <SkillsComponent/>
        <Title subTitle="About Me" title="About Me"/>
        <AboutMe/>

        <Title subTitle="HeroSection 3" title="HeroSection 3"/>
        <HeroSection3/>

        <Title subTitle="MyPortfolio" title="MyPortfolio"/>
        <MyPortfolio/>

        <Title subTitle="MySkills" title="MySkills"/>
        <MySkills/>

        <Footer/>
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>

  )
}

export default App