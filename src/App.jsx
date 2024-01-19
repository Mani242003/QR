import React, { useState,useEffect,useRef } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Video from "./Components/Video/Video";
import Features from "./Components/Features/Features";
import Count from "./Components/Count/Count";
import Simplicity from "./Components/Simplicity/Simplicity";
import Slider from "./Components/Slider/SliderComponent";
import Payment from "./Components/Payment/Payment";
import Testimonial from "./Components/Testtimonials/Testimonial";
import AccordionSection from "./Components/Accordion/AccordionSection";
import Price from "./Components/Price/Price";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";
import { PacmanLoader } from "react-spinners";
import Challenges from "./Components/Challenges/Challenges";
import IntroPage from "./Components/IntroPage/IntroPage";
import ReadMoreLess from "./Components/ReadMoreLess/ReadMoreLess";
import MarketPage from "./Components/MarketPage/MarketPage";
import MarketPlan from "./Components/MarketPlan/MarketPlan";


const App = () => {
  const [loader, setLoader] = useState(true);
  const ref = useRef();
  useEffect(()=>{

    const fakeDataFetch=()=>{
      setTimeout(()=>{
        setLoader(false)
      },2000)
    }

    fakeDataFetch()

  },[loader])
  return (
    <>
    
      
        <div className="NavHomeContainer">
          {/* <video src={video} className='video-bg' autoPlay muted loop/> */}
          {/* <div className="bglayer"></div> */}
          <div className="navHomeSep">
         
            <Navbar />
            <Home />
          </div>
          
          <Challenges />
          {/* <IntroPage /> */}
          {/* <Video /> */}
          {/* <Features /> */}
          <ReadMoreLess />
          <Count />
          <Simplicity />
          <MarketPage />
          <MarketPlan />
          <Slider />
          <Payment />
          <Testimonial />
          <Price />

          <AccordionSection />
          <Contact />
          <Footer />
        </div>
      
    </>
  );
};

export default App;
