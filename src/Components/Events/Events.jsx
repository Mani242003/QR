import React from "react";
import "./Events.scss";
import tech from "../../Images/2024/tech.png";
import nonTech from "../../Images/2024/non-tech.png";
import { Link } from "react-scroll";
import Cards from "./cards/Cards";

const Events = () => {
  return (
    <section className="events_wrapper" id="events">
      <div className="event_container">
        <span className="event_title_header">Events</span>
        <span className="event_title_des">
          Explore the following Events during the symposium.
        </span>

        <div className="event_contents">
            <Cards img={tech} name="Technical Events" des=" Unleash innovation, ignite competition - where code meets
              creativity!" link="tech"  />
      
          
         
            <Cards img={nonTech} name="Non-Technical Events" des=" Elevate excitement, ignite camaraderie - where fun meets strategy!" link="non-tech" />

        </div>
      </div>
    </section>
  );
};

export default Events;
