import React, { useState,useEffect,useRef } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

import Slider from "./Components/Slider/SliderComponent";
import Price from "./Components/Price/Price";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";
import Challenges from "./Components/Challenges/Challenges";
import MarketPlan from "./Components/MarketPlan/MarketPlan";
import Events from "./Components/Events/Events";
import Technical from "./Components/Events/Technical/Technical";
import NonTechnical from "./Components/Events/NonTechnical/NonTechnical";
import Guest from "./Components/Guest/Guest";


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
          
          <div className="navHomeSep">
         
            <Navbar />
            <Home />
          </div>
          
          <Challenges />
          <Events />
          <Technical />
          <NonTechnical />
          
         
          <Slider />
          {/* <MarketPlan /> */}

          <Price />
          <Guest />

          <Contact />
          <Footer />
        </div>
      
    </>
  );
};

export default App;
