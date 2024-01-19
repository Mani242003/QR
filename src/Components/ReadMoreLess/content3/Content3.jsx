import React, { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import "./Content3.scss";

const Content3 = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className="content3_container" 
    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
      <div className="content3_header">
        <span className="content3_number">03</span>
        <span className="content3_header_text">END USER</span>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>QR code : </span> Scanning
          </span>
        </div>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Authentication : </span>OTP
          </span>
        </div>
      </div>
      <div className="content_list_container">
        <div className="content_list_container_icon_container">
          <FaRegCircleDot />
        </div>
        <div className="content_list_container_des_container">
          <span className="content_des">
            <span>Landing page : </span>
            Food items, deals / offers, videos, Notifications
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
                <span>Augmented reality :</span>
                Showcase of food outcome based on AR technology
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
                <span>Food page : </span>
                Ingredients / health benefits, order
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
                <span> Cart page : </span>
                Quantity / price
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
                <span> Track order : </span>
                Kitchen status, cancel order
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
                <span> Personalized notification : </span>
                One way communication from chef
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
                <span> Waiter : </span>
                Make call to waiter
              </span>
            </div>
          </div>
           {/* li-7 */}
           <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> Close the order : </span>
                Bill generation, payment, payment
              </span>
            </div>
          </div>
            {/* li-8 */}
            <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> acknowledgement, digital bill</span>
              
              </span>
            </div>
          </div>
          {/* li-9 */}
          <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> Feedback / Improvisation : </span>
                Google review
              
              </span>
            </div>
          </div>
            {/* li-10 */}
            <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> AI based food recommendation for customers based on their </span>
              
              </span>
            </div>
          </div>
             {/* li-11 */}
             <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> food patterns, behavioural analysis, sales pattern of the </span>
              
              </span>
            </div>
          </div>
            {/* li-12 */}
            <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> respective restaurants. </span>
              
              </span>
            </div>
          </div>
             {/* li-13 */}
             <div className="content_list_container">
            <div className="content_list_container_icon_container">
              <FaRegCircleDot />
            </div>
            <div className="content_list_container_des_container">
              <span className="content_des">
                <span> Customer loyalty points – Redeem </span>
              
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

export default Content3;
