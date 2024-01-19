import React, { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import "./Content1.scss";

const Content1 = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className="content1_container"
    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
    >
      <div className="content1_header">
        <span className="content1_number">01</span>
        <span className="content1_header_text">SUPER ADMIN</span>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Request page : </span> Onboard / Reject the restaurant owner
            requests.
          </span>
        </div>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Subscription fee </span>
          </span>
        </div>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Features listed for restaurant </span>
          </span>
        </div>
      </div>
      {isShowMore && (
        <div className="content_list_container">
          <div className="content_list_container_icon_container">
            {/* <FaRegCircleDot /> */}
          </div>
          <div className="content_list_container_des_container">
            <span className="content_des">
              <span> owners (Admin)</span>
            </span>
          </div>
        </div>
      )}
      <div className="content_button_container">
        <button onClick={toggleReadMoreLess} >
          {isShowMore ? (
            <span>
              Read Less
              <IoIosArrowDropup />
            </span>
          ) : (
            <span>
              Read More
              <IoIosArrowDropdown />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Content1;
