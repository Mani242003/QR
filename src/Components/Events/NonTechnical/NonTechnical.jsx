import React from 'react'
import "./NonTechnical.scss"
// import Cards1 from '../Technical/Cards1/Cards1'
import eGames from "../../../Images/2024/eGames.jpg";
import treasureHunt from "../../../Images/2024/TH.jpg";
import foodFun from "../../../Images/2024/FF.jpg";
import photography from "../../../Images/2024/photo.jpg";
import murderMystery from "../../../Images/2024/MM.jpg";
import connection from "../../../Images/2024/connection.jpg";
import N_T_C from './NTC/N_T_C';



const NonTechnical = () => {
  return (
    <section className="tech_wrapper" id="non-tech">
    <div className="non_tech_container">
      <span className="title">Non-<span>Technical</span> Events</span>


      <div className="N_T_C_1">
        <N_T_C name="1.E-Games" sub_name="(PUBG,FREE FIRE)" img={eGames} time1="11:30" time2="1:00" />
        <N_T_C id={true} name="1.E-Games" sub_name="(PUBG,FREE FIRE)" img={eGames} time1="11:30" time2="1:00" />
        <N_T_C name="1.E-Games" sub_name="(PUBG,FREE FIRE)" img={eGames} time1="11:30" time2="1:00" />
         
      </div>
      <div className="N_T_C_2">
      <N_T_C id={true} name="1.E-Games" sub_name="(PUBG,FREE FIRE)" img={eGames} time1="11:30" time2="1:00" />
      <N_T_C name="1.E-Games" sub_name="(PUBG,FREE FIRE)" img={eGames} time1="11:30" time2="1:00" />
      <N_T_C id={true} name="1.E-Games" sub_name="(PUBG,FREE FIRE)" img={eGames} time1="11:30" time2="1:00" />

      </div>

      {/* <Cards1 name="1.E-Games (PUBG,FREE FIRE)" img={eGames} id={true} />
      <Cards1 name="2.Treasure Hunt" img={treasureHunt} id={true}  />
      <Cards1 name="3.Food Fun" img={foodFun} />
      <Cards1 name="4.Theme Photography" img={photography} id={true}  />
      <Cards1 name="5.Murder Mystery" img={murderMystery}  id={true} />
      <Cards1 name="6.Connection" img={connection} id={true} /> */}


      
    </div>
  </section>
  )
}

export default NonTechnical