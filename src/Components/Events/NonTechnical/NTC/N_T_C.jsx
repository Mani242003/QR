import React from 'react'
import "./N_T_C.scss"

const N_T_C = ({img,name,time1,time2,sub_name,id }) => {
  return (
    <div className={id ? "non_tect_custom non_tech_card   ":'non_tech_card '}> 
    <div className="non_tech_card_left ">
        <img src={img} alt="" />

    </div>
    <div className="non_tech_card_right " >
        <span className='non_tech_title'>{name} <span>{sub_name}</span></span>
        <span className='non_tech_time'><span>Start : </span>{time1} AM <span>End : </span>{time2} PM</span>

        <a href="https://forms.gle/KxE6p4czFsL6G6wV9">
            <button className= "button1">Register Now</button>
          </a>
    </div>

    </div>
  )
}

export default N_T_C