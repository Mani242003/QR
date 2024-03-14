import React from "react";
import "./PriceCard.scss";
import { FaRegDotCircle } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

const PriceCard = ({ plan, amout, style, id, data1, data2, data3 }) => {
  return (
    <div
      className={id ? "priceCard_container" : "priceCard_container customCard"}
    >
      <span className="priceCard_text1">{plan}</span>
    
     

      <div className="priceCard_amout_container">
        <span><span><FaRupeeSign style={{color:'black',marginTop:"0.5rem"}}/></span><span>{amout}</span></span>
        <span style={{fontSize:'15px', fontWeight:'500'}}>/Per Event</span>
      </div>
      <span>
        <span>
          <FaRegDotCircle />
        </span>{" "}
        <span>Food</span>
      </span>
      <span>
        <span>
          <FaRegDotCircle />{" "}
        </span>
        <span>Certificate</span>
      </span>
      <span>
        {" "}
        <span>
          <FaRegDotCircle />
        </span>
        <span> Tag</span>
      </span>
      
      <a
      href="https://forms.gle/KxE6p4czFsL6G6wV9"
      style={{textDecoration:'none'}}
        className={id ? "priceCard_button" : "priceCard_button customButton"}
      >
        Register Now
      </a>
    </div>
  );
};

export default PriceCard;
