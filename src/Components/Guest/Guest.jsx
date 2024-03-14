import React from "react";
import "./Guest.scss";
import GuestCard from "./GuestCard/GuestCard";
import g1img from "../../Images/2024/FF.jpg";

const Guest = () => {
  return (
    <div className="guest_container" id="guest">
      <span className="guestTitel">Guest OF Honour</span>
      <div className="guest_container1">
        <GuestCard
          img={g1img}
          name="ABCD EGHH"
          des="beatae magni laborum obcaecati animi suscipit rem provident odio consectetur cupiditate?"
        />
        <GuestCard
          img={g1img}
          name="ABCD EGHH"
          des="beatae magni laborum obcaecati animi suscipit rem provident odio consectetur cupiditate?"
        />
      </div>
      <div className="guest_container2">
        <GuestCard
          img={g1img}
          name="ABCD EGHH"
          des="beatae magni laborum obcaecati animi suscipit rem provident odio consectetur cupiditate?"
        />
        <GuestCard
          img={g1img}
          name="ABCD EGHH"
          des="beatae magni laborum obcaecati animi suscipit rem provident odio consectetur cupiditate?"
        />
      </div>
    </div>
  );
};

export default Guest;
