import React from "react";
import "./CustomTestimonial.scss";
import { AiFillSetting } from "react-icons/ai";
import logoForTesting from "../../../Images/testimonialSection/Screenshot 2023-10-29 225938.png"
import {BiStar} from "react-icons/bi"

const CustomTestimonial = ({ ...data }) => {
  // const titel = data.item.description;
  // console.log(titel);
  
  return (
    <div className="CT_container">
      <div className="CT_header">
        <span className="CT_header_text1">{data.item.description}</span>
        <span className="CT_header_text2">
          <BiStar /> <BiStar /> <BiStar />{" "}
          <BiStar /> <BiStar />{" "}
        </span>
        <span className="CT_header_text3">5.0 <span>Rating</span></span>
      </div>
      <div className="CT_bottom">
        <img src={data.item.img} alt="" />
        <div className="CT_bottom_text_container">
        <span className="CT_bottom_text_1">{data.item.name}</span>
        <span className="CT_bottom_text_2">{data.item.job}</span>

        </div>
       


      </div>
    </div>
  );
};

export default CustomTestimonial;
