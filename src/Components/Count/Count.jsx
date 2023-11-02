import React,{useState} from "react";
import "./Count.scss"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Count = () => {
  const [counterOn, setcounterOn] = useState(false)




  return (
  <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>

  <section className="count_wrapper">

    <div className="count_container">
        <div className="count_header">
          <span className="count_header_text">More Faster, More Powerful App</span>
          <span className="count_header_des">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, blandit posuere ligula varius magna congue cursus porta</span>

        </div>
        <div className="count_main_container">
            <div className="count-1_container count_num_container">
              <span className="countNum">{counterOn &&  <CountUp start={0} end={97} duration={6} delay={0} />} %</span>
              <span className="countText">App Productivity</span>


            </div>
            <div className="count-2_container count_num_container">
            <span className="countNum">{counterOn &&  <CountUp start={0} end={80} duration={6} delay={0} />} %</span>
            <span className="countText">Faster Access</span>


            </div>
            <div className="count-3_container count_num_container">
            <span className="countNum">{counterOn &&  <CountUp start={0} end={67} duration={6} delay={0} />} %</span>
            <span className="countText">Battery Saving</span>


            </div>

        </div>
    </div>

  </section>
  </ScrollTrigger>)
};

export default Count;
