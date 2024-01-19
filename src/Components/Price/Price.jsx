import React, { useState } from "react";
import "./Price.scss";
// import { alpha, styled } from '@mui/material/styles';
// import { pink } from '@mui/material/colors';
// import Switch from '@mui/material/Switch';
import Switch from "react-js-switch";
import PriceCard from "./PriceCard/PriceCard";

const Price = () => {
  // const [toggle, setToggle] = useState(true);

  // const toggler = () => {
  //   toggle ? setToggle(false) : setToggle(true);
  // };

  // console.log(annually);

  return (
    <section className="price_wrapper" id="price">
      <div className="price_container">
        <div className="price_col1">
          <span className="price_col1_text1">
            How we Compare your <span>Pricing</span>
          </span>
          <span className="price_col1_text2">
          Understanding the intricacies of pricing in a dynamic market is pivotal, and our approach to comparing pricing is both comprehensive and transparent. We employ advanced algorithms and thorough market analysis to ensure that the evaluation of your pricing is meticulous and up-to-date. Our comparison process goes beyond surface-level assessments, delving into the nuances of your pricing strategy, competitors' offerings, and industry benchmarks.
          </span>
          {/* <div className="price_col1_button_container">
            <p>Monthly</p>
            <Switch value={toggle} onChange={toggler} />

            <span>Annually</span>
          </div> */}
        </div>
        <div className="price_col2">
          <PriceCard
            id={true}
            amout="2500"
            plan="Essential"
            data1="5 QR model stand"
            data2="Standard customer support (turnaround time of 24 hours)"
          />
        </div>
        <div className="price_col3">
          <PriceCard
            id={false}
            amout="1500"
            plan="Standard"
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
