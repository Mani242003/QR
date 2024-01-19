import React, { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import "./Content2.scss";

const Content2 = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className="content2_container"
    data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1000">
      <div className="content2_header">
        <span className="content2_number">02</span>
        <span className="content2_header_text">ADMIN</span>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Authentication </span>
          </span>
        </div>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Dashboard : </span> Essential insights
          </span>
        </div>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Food Category : </span>Add / Edit / Remove
          </span>
        </div>
      </div>
      {isShowMore && (
        <>
          {/* li-1 */}
          <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> Food Sub-Category : </span> Add / Edit / Remove
              </span>
            </div>
          </div>
          {/* li-2 */}
          <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> Time Slot : </span> Morning / Noon / Night
              </span>
            </div>
          </div>
          {/* li-3 */}
          <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> Food items : </span> Images, Rate, Lightning deals, Day
                offers, ingredients / health benefits
              </span>
            </div>
          </div>
          {/* li-4 */}
          <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> Employees : </span> Images, Aadhaar no, Contact details
              </span>
            </div>
          </div>
          {/* li-5 */}
          <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> Tables : </span> Generate unique QR codes{" "}
              </span>
            </div>
          </div>
          {/* li-6 */}
          <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> Upload videos: </span> Food making videos, recent
                activity videos AI based recommendation of food item, quantity
                preparation for the day based on the historical data, local
                festivals Profile settings & reports
              </span>
            </div>
          </div>
        </>
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

export default Content2;
