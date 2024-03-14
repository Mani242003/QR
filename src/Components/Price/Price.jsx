import React, { useState } from "react";
import "./Price.scss";
// import { alpha, styled } from '@mui/material/styles';
// import { pink } from '@mui/material/colors';
// import Switch from '@mui/material/Switch';
import Switch from "react-js-switch";
import PriceCard from "./PriceCard/PriceCard";

const Price = () => {


  return (
    <section className="price_wrapper" id="price">
      <div className="price_container">
        <div className="price_col1">
          <span className="price_col1_text1">
            Registration
          </span>
          
       
        </div>
        
        <div className="price_col3">
          <PriceCard
            id={false}
            amout="150"
            plan="Technical / Non-Technical"
            data1="For chain of restaurants"
            data2="25 QR model stand"
            data3="Priority customer support (turnaround
              time of 5 hours and Dedicated engineer)"
          />
        </div>
      </div>
    </section>
  );
};

export default Price;
