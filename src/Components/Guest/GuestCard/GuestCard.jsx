import React from 'react'
import "./GuestCard.scss"

const GuestCard = ({img,name,des}) => {
  return (
    <div className='guest_card_container'>
        <img src={img} alt="" />
        <span className="guest_name">{name}</span>
        <span className="guest_des">{des}</span>
    </div>
  )
}

export default GuestCard