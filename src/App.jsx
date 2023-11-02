import React from 'react'
import "./App.scss"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Video from './Components/Video/Video'
import Features from './Components/Features/Features'
import Count from './Components/Count/Count'
import Simplicity from './Components/Simplicity/Simplicity'
import Slider from './Components/Slider/SliderComponent'
import Payment from './Components/Payment/Payment'
import Testimonial from './Components/Testtimonials/Testimonial'
import AccordionSection from './Components/Accordion/AccordionSection'
import Price from './Components/Price/Price'
import Contact from './Components/contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
   <div className="NavHomeContainer">
    
    {/* <video src={video} className='video-bg' autoPlay muted loop/> */}
   <div className="bglayer"></div>
    <div className='navHomeSep'>
    <Navbar />
    <Home />
    </div>
    <Video />
    <Features />
    <Count />
    <Simplicity />
    <Slider />
    <Payment />
    <Testimonial />
    <Price />
    
    <AccordionSection />
    <Contact />
    <Footer />
   
   </div>
    </>
    
    
    )
}

export default App