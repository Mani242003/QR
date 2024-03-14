import React from "react";
import "./Technical.scss";
import bug from "../../../Images/2024/budfix.jpg";
import quiz from "../../../Images/2024/qiz.jpg";
import PPT from "../../../Images/2024/presentation.jpg";
import web from "../../../Images/2024/webDev.jpg";
import battel from "../../../Images/2024/battel.jpg";

import Cards1 from "./Cards1/Cards1";

const Technical = () => {
  return (
    <section className="tech_wrapper" id="tech">
      <div className="tech_container">
        <span className="title">Tecnical Events</span>
        <Cards1 name="1.BUGZEN (Bug Fixing)" img={bug} />
        <Cards1 name="2.Technical Quiz" img={quiz} />
        <Cards1 name="3.Paper Presentation" img={PPT} />
        <Cards1 name="4.Web Designing" img={web} />
        <Cards1 name="5.Battel of Code" img={battel} />


        
      </div>
    </section>
  );
};

export default Technical;
