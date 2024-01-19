import React, { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import "./Content4.scss";

const Content4 = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className="content4_container" 
    data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1000">
      <div className="content4_header">
        <span className="content4_number">04</span>
        <span className="content4_header_text">KITCHEN</span>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Kitchen (Mobile app)</span>
          </span>
        </div>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Dashboard :</span>
            Order trends, Best employee (data driven), hot selling food item
          </span>
        </div>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Order page : </span>Differentiation of new & running order, timer for food preparation with color differentiation, food ready functionality
          </span>
        </div>
      </div>
      {isShowMore && (
        <div className="content_list_container">
          <div className="content_list_container_icon_container">
            <FaRegCircleDot />
          </div>
          <div className="content_list_container_des_container">
            <span className="content_des">
              <span> Notification :  </span> Predefined message templates
            </span>
          </div>
        </div>
      )}
      <div className="content_button_container">
        <button onClick={toggleReadMoreLess}>
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

export default Content4;
