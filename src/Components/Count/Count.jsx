import React, { useState } from "react";
import "./Count.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Count = () => {
  const [counterOn, setcounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setcounterOn(true)}
      onExit={() => setcounterOn(false)}
    >
      <section className="count_wrapper">
        <div className="count_container">
          <div className="count_header">
            <span className="count_header_text">
              DIGITAL MENUS ARE THE FUTURE
            </span>
          </div>
          <div className="count_main_container">
            {/* <div className="count-1_container count_num_container">
              <span className="countNum">{counterOn &&  <CountUp start={0} end={97} duration={6} delay={0} />} %</span>
              <span className="countText">App Productivity</span>


            </div> */}
            <div className="count-2_container count_num_container">
              <span className="countNum">
                {counterOn && (
                  <CountUp start={0} end={88} duration={6} delay={0} />
                )}{" "}
                %
              </span>
              <span className="count_header_des">
            of eateries consider using digital menus (
            <a
              href="https://www.restaurantdive.com/news/88-of-restaurants-considering-swapping-to-digital-menus-survey-says/595558/#:~:text=from%20your%20inbox.-,88%25%20of%20restaurants%20considering%20swapping%20to%20digital%20menus%2C%20survey%20says,of%20Restaurants%202021%20report%20shows"
              target="_blank"
              style={{color:'white'}}
            >
             
              restaurantdive.com
            </a>
            )
          </span>
              {/* <span className="countText">Faster Access</span> */}
            </div>
            {/* <div className="count-3_container count_num_container">
            <span className="countNum">{counterOn &&  <CountUp start={0} end={67} duration={6} delay={0} />} %</span>
            <span className="countText">Battery Saving</span>


            </div> */}
          </div>
          
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Count;
