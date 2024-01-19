import React from "react";
import "./ReadMoreLess.scss";
import phoneMockup from "../../Images/readMorePageAssets/phone2.png";
import moduleImg from "../../Images/readMorePageAssets/moduleFinal.png";
import Content1 from "./content1/Content1";
import Content2 from "./content3/Content3";
import Content3 from "./content2/Content2";
import Content4 from "./content4/Content4";

const ReadMoreLess = () => {
 
 
   
  return (
    <section className="readMoreLess_wrapper" id="features">
      <div className="readMoreLess_container">
        <div className="readMoreLess_header_container">
          <span className="readMoreLess_header_text">
            Happiediner <span>Modules</span>
            <span style={{ color: "black" }}> & </span> <span>Features</span>
          </span>
          <img src={moduleImg} alt="" />
        </div>
        <div className="readMoreLess_main_container">
          <div className="readMoreLess_left_container">
            <Content1  />
            <Content3  />
          </div>
          <div className="readMoreLess_middel_container">
            <div className="readMoreLess_img_container">
              <img src={phoneMockup} alt=""   data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"/>
            </div>
          </div>
          <div className="readMoreLess_right_container">
            <Content2  />

            <Content4  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadMoreLess;
