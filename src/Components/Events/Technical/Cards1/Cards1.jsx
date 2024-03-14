import React from 'react'
import "./Cards1.scss"

const Cards1 = ({img,name,id}) => {
  return (
    <div className="content1" id='nonTech'>
          <img src={img} alt="" />
          <span className="eventName">{name}</span>
          {/* <span className="eventdes">
             {des}
            </span> */}
          <a href="https://forms.gle/KxE6p4czFsL6G6wV9">
            <button className= "button">Register Now</button>
          </a>
        </div>
  )
}

export default Cards1