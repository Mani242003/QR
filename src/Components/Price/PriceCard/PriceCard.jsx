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
      {
        amout === '2500' ?( <span style={{fontSize:'15px', fontWeight:'500'}}>This plan is best for small businesses.</span>):(
          <span style={{fontSize:'15px', fontWeight:'500'}}>This plan is best for chain of restaurants.</span>
        )
      }
     

      <div className="priceCard_amout_container">
        <span><span><FaRupeeSign style={{color:'black',marginTop:"0.5rem"}}/></span><span>{amout}</span></span>
        <span style={{fontSize:'15px', fontWeight:'500'}}>/month</span>
      </div>
      <span>
        <span>
          <FaRegDotCircle />
        </span>{" "}
        <span>AWS server account setup for each restaurants</span>
      </span>
      <span>
        <span>
          <FaRegDotCircle />{" "}
        </span>
        <span>{data1}</span>
      </span>
      <span>
        {" "}
        <span>
          <FaRegDotCircle />
        </span>
        <span> {data2}</span>
      </span>
      {data3 ? (
        <>
          <span>
            {" "}
            <span>
              <FaRegDotCircle />
            </span>{" "}
            <span>{data3}</span>
          </span>
        </>
      ) : (
        <></>
      )}
      <button
        className={id ? "priceCard_button" : "priceCard_button customButton"}
      >
        Purchase Now!
      </button>
    </div>
  );
};

export default PriceCard;
