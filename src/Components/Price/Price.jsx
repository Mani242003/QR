import React, { useState } from "react";
import "./Price.scss";
// import { alpha, styled } from '@mui/material/styles';
// import { pink } from '@mui/material/colors';
// import Switch from '@mui/material/Switch';
import Switch from "react-js-switch";
import PriceCard from "./PriceCard/PriceCard";

const Price = () => {
  const [toggle, setToggle] = useState(true);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };



  // console.log(annually);

  return (
    <section className="price_wrapper" id="price">
      <div className="price_container">
        <div className="price_col1">
          <span className="price_col1_text1">How we Compare your <span>Pricing</span></span>
          <span className="price_col1_text2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            dolorem sapiente itaque accusantium sunt, temporibus voluptas
            adipisci, debitis excepturi quasi impedit veritatis maiores
            deserunt, hic ex molestiae modi fuga non?
          </span>
          <div className="price_col1_button_container">
            <p>Monthly</p>
            <Switch value={toggle}  onChange={toggler} />

            <span>Annually</span>
          </div>
        </div>
        <div className="price_col2">
          <PriceCard id={true} amout={toggle ? "$154" : "$76"}  plan="Basic" />
        </div>
        <div className="price_col3">
          <PriceCard id={false} amout={toggle ? "$178" : "$95"}  plan="Standard"  />
        </div>
      </div>
    </section>
  );
};

export default Price;
