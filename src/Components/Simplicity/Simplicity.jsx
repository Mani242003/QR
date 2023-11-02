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
    <section className="simplicity_wrapper">
      <div className="simplicity_container">
        <div className="simplicity_left">
          <img src={mockupLeft} className="mockupLeft" alt="" />
          <img src={mockupRight} className="mockupRight" alt="" />
        </div>
        <div className="simplicity_right">
          <span className="simplicity_right_text1">BEAUTY OF SIMPLICITY</span>
          <span className="simplicity_right_text2">
            Elegant & intuitive <span>user interface</span>
          </span>
          <span className="simplicity_right_text3">
            An enim nullam tempor sapien gravida donec an ipsum pretium porta
            justo integer at odio velna vitae auctor integer and congue magna at
            purus pretium ligula rutrum luctus ultrice undo gravida lectus
            suscipit gestas magna suscipit luctus undo
          </span>
          <div className="simplicity_right_bottom">
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
