import React from "react";
import "./MarketPlan.scss";
import img1 from "../../Images/marketPlan/img-1.png";
import img2 from "../../Images/marketPlan/img-2.png";
import img3 from "../../Images/marketPlan/img-3.png";
import img4 from "../../Images/marketPlan/img-4.png";
import img5 from "../../Images/marketPlan/img-5.png";

const MarketPlan = () => {
  return (
    <section className="marketPlan_wrapper">
      <div className="marketPlan_container">
        <div className="marketPlan_top_container">
          <span className="marketPlan_top_text">
            Go To <span>Market Plan</span>
          </span>
        </div>
        <div className="marketPlan_middle_container">
          <div className="marketPlan_middle_content_container">
            <img src={img1} alt="" />
            <span className="marketPlan_middle_content_inner_titel">
              Restaurant Partnerships
            </span>
            <span className="marketPlan_middle_content_inner_des">
              Collaborate with restaurants to offer exclusive discounts or
              promotions for using the app.
            </span>
          </div>
          <div className="marketPlan_middle_content_container">
            <img src={img2} alt="" />
            <span className="marketPlan_middle_content_inner_titel">
              Events and Sponsorships
            </span>
            <span className="marketPlan_middle_content_inner_des">
              Participate in food festivals and industry events to showcase the
              app and reach potential users. (The Grub Fest, AAHAR, Goa Food and
              Culture Festival)
            </span>
          </div>
          <div className="marketPlan_middle_content_container">
            <img src={img3} alt="" />
            <span className="marketPlan_middle_content_inner_titel">
              Digital Marketing
            </span>
            <span className="marketPlan_middle_content_inner_des">
              Partner with food bloggers and influencers for targeted
              reach.Blogs, infographics, and videos on food trends and the
              convenience of QR code menus
            </span>
          </div>
        </div>
        <div className="marketPlan_bottom_container">
            <span className="marketPlan_bottom_text">(<span>Partnerships </span> in progress)</span>
            <div className="marketPlan_bottom_img_container">
                <img src={img4} alt="" className="marketPlan_bottom_img1" />
                <img src={img5} alt="" className="marketPlan_bottom_img2" />

            </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPlan;
