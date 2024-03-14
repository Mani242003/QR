import React from "react";
import "./Challenges.scss";
import banner from "../../Images/2024/Banner.jpeg";


const Challenges = () => {
  return (
    <section className="challenges_wrapper" >
      <div className="challenges_container">
        <span className="title"> About ZENITH'24</span>
        <img src={banner} alt="" />
        <span className="des">
        Welcome to ZENITH'24 Symposium, where innovation meets inspiration! Join us for a fusion of technical prowess and non-technical excitement, presented by the Department of Information Technology (IT).
              </span>




        {/* <div className="challenges_left">
          <div className="challenges_left_title">
            <span className="challenges_left_title_text">
              About <span>WEBIT</span> 2k'24...
            </span>
          </div>
          <div className="challenges_left_content-1" data-aos="fade-down "
     data-aos-anchor-placement="center-bottom" data-aos-duration="2500">
            <div className="challenges_left_content_left">
              <img src={banner} alt="" />
            </div>
            <div className="challenges_left_content_right">
              <span className="challenges_left_content_right_title">
                UNORGANISED KITCHENS
              </span>
              <span className="challenges_left_content_right_des">
                Kitchens find it difficult to differentiate fresh / running
                orders. Also no system is in place to prompt the avg.
                preparation time for each food
              </span>
            </div>
          </div>
        </div> */}
       
      </div>
    </section>
  );
};

export default Challenges;
