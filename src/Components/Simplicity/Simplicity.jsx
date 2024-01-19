import React from "react";
import "./Simplicity.scss";
import mockupLeft from "../../Images/simplicity/mockupLeft.png";
import mockupRight from "../../Images/simplicity/phone2.png";
import { HiShare } from "react-icons/hi";
import {MdOutlineSecurity} from "react-icons/md"
import {AiFillSetting} from "react-icons/ai"
import {IoMdColorPalette} from "react-icons/io"

const Simplicity = () => {
  return (
    <section className="simplicity_wrapper" id="simplicity">
      <div className="simplicity_container">
        <div className="simplicity_left"  >
          <img src={mockupLeft} className="mockupLeft" alt="" />
          <img src={mockupRight} className="mockupRight" alt="" />
        </div>
        <div className="simplicity_right">
          <span className="simplicity_right_text1"  data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">BEAUTY OF SIMPLICITY</span>
          <span className="simplicity_right_text2" 
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500">
            Elegant & intuitive <span>user interface</span>
          </span>
          <span className="simplicity_right_text3" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
          A sophisticated and user-friendly interface.
An interface that combines elegance with intuitive design.
User interface characterized by both elegance and intuitiveness.
A gracefully designed and easy-to-use interface.
Interface that seamlessly blends elegance and user-friendliness
          </span>
          <div className="simplicity_right_bottom" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2500">
            <div className="simplicity_bottom_row1">
              <div className="simplicity_bottom_row1_content">
                <HiShare />
                <span>Access control</span>
              </div>
              <div className="simplicity_bottom_row1_content">
                <MdOutlineSecurity />
                <span>High Security</span>

              </div>
            </div>
            <div className="simplicity_bottom_row2">
              <div className="simplicity_bottom_row2_content">
                <IoMdColorPalette />
                <span>Unique Design</span>

              </div>
              <div className="simplicity_bottom_row2_content">
                <AiFillSetting />
                <span>Access control</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simplicity;
