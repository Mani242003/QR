import React from "react";
import "./PriceCard.scss";

const PriceCard = ({plan, amout,style,id}) => {
  return (
    <div className={id ?"priceCard_container":"priceCard_container customCard"}>
      <span className="priceCard_text1">{plan}</span>
      <div className="priceCard_amout_container">
        <span>{amout}</span>
      </div>
      <span>Push Notification</span>
      <span>Data transfer</span>
      <span>SQL Database</span>
      <span>licensing and support</span>
      <span>pushNotification</span>
      <span>Search and SEO Anaylcis </span>
      <span>One-Time Purchase</span>
      <button className={id?"priceCard_button":"priceCard_button customButton"}>Purchase Now!</button>
    </div>
  );
};

export default PriceCard;
