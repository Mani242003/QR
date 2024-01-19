import React from "react";
import "./Challenges.scss";
import content_1Img from "../../Images/challenges/content-1.png";
import content_2Img from "../../Images/challenges/content-2.png";
import content_3Img from "../../Images/challenges/content-3.png";
import content_4Img from "../../Images/challenges/content-4.png";

const Challenges = () => {
  return (
    <section className="challenges_wrapper" >
      <div className="challenges_container">
        <div className="challenges_left">
          <div className="challenges_left_title">
            <span className="challenges_left_title_text">
              Challenges in <span>Traditional Restaurant</span> Ordering...
            </span>
          </div>
          <div className="challenges_left_content-1" data-aos="fade-down "
     data-aos-anchor-placement="center-bottom" data-aos-duration="2500">
            <div className="challenges_left_content_left">
              <img src={content_1Img} alt="" />
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
        </div>
        <div className="challenges_right">
          <div className="challenges_right_content" data-aos="fade-down "
     data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <div className="challenges_right_content_left" >
              <img src={content_2Img} alt="" className="challenges_custom_logo" />
            </div>
            <div className="challenges_right_content_right">
              <span className="challenges_right_content_right_title">
                OPERATIONAL CONFUSION
              </span>
              <span className="challenges_right_content_right_des">
                Customers cannot track the food orders, food delay during busy
                hours, waiting time to place tunning order and lack of digital
                payment
              </span>
            </div>
          </div>
          <div className="challenges_right_content" data-aos="fade-down "
     data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <div className="challenges_right_content_left">
              <img src={content_3Img} alt="" className="challenges_custom_logo2" />
            </div>
            <div className="challenges_right_content_right">
              <span className="challenges_right_content_right_title">
                TRADITIONAL MENUS
              </span>
              <span className="challenges_right_content_right_des">
                Difficult to update price changes, food unavailability and
                dynamic deal
              </span>
            </div>
          </div>
          <div className="challenges_right_content" data-aos="fade-down "
     data-aos-anchor-placement="center-bottom" data-aos-duration="2500">
            <div className="challenges_right_content_left">
              <img src={content_4Img} alt="" className="challenges_custom_logo2" />
            </div>
            <div className="challenges_right_content_right">
              <span className="challenges_right_content_right_title">
                LACK OF DATA DRIVEN DECISION
              </span>
              <span className="challenges_right_content_right_des">
                No AI engine to recommend effective solution for food wastage,
                assist customers during food orders.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
