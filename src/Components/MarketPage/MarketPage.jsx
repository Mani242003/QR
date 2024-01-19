import React from "react";
import "./MarketPage.scss";
import graphImg from "../../Images/MarketPageassets/graphFinal.png";
import { FaRegDotCircle } from "react-icons/fa";

const MarketPage = () => {
  return (
    <section className="marketPage_wrapper">
      <div className="marketPage_container">
        <span className="marketPage_left_titel">
          Market Size & <span>Opportunity</span>
        </span>
        <div className="marketPageMainContent">
          <div className="marketPage_left" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <span className="marketPage_left_sub_titel">ADOPTION RATE</span>
            <span className="marketPage_left_des">
              Global digital menu market is expected to reach USD{" "}
              <span>18.81 billion by 2027</span> (Grand View Research)
            </span>
            <span className="marketPage_left_sub_titel">
              BENEFITS AND IMPACT
            </span>
            <span className="marketPage_left_des">
              <FaRegDotCircle />
              <span>20% increase in average order</span> value with digital
              menus (Toast)
            </span>
            <span className="marketPage_left_des">
              <FaRegDotCircle />
              <span>30% reduction in order errors</span> with digital menus
              (SevenRooms)
            </span>
            <span className="marketPage_left_des">
              <FaRegDotCircle />
              <span>15% decrease in labor costs</span> due to streamlined
              ordering (Grubhub)
            </span>
            <span className="marketPage_left_des">
              <FaRegDotCircle />
              <span>40% increase in customer satisfaction</span> with digital
              menus (Upserve)
            </span>
          </div>
          <div className="marketPage_right" data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
            <img src={graphImg} alt="" />
            <span className="marketPage_right_sub_titel">Adoption Trend</span>
            <span className="marketPage_right_des">
              The
              <span>
                {" "}
                pandemic in 2020 significantly accelerated the adoption
              </span>{" "}
              of digital menus due to hygiene concerns and contactless ordering
              needs.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPage;
