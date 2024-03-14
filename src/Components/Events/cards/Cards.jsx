import React from 'react'
import "./Cards.scss"
import { Link } from "react-scroll";
// import tech from "../../../Images/2024/tech.png";


const Cards = ({img,name,des,link}) => {
  return (
    <div className="content">
            <img src={img} alt="" />
            <span className="eventName">{name}</span>
            <span className="eventdes">
             {des}
            </span>
            <Link to={link} spy={true} offset={-70} duration={600}>
              <button className="button">Know more</button>
            </Link>
          </div>
  )
}

export default Cards