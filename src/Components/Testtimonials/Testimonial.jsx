import React from "react";
import "./Testimonial.scss";
import { testimonialHeaderImg } from "../../Data/Dummy";
import { testimonialSliderDatas } from "../../Data/Dummy";


// import logTesting from "../../Images/testimonialSection/Logo1.png";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import CustomTestimonial from "./CustomTestimonial/CustomTestimonial";
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return (1);
    }
    if (!document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return (3);
    }
  };
  return (
    <section className="testimonial_wrapper">
      <div className="testimonial_container">
        <div className="testimonial_header">
          <span className="testimonial_title">
            What our <span> Company says</span>
          </span>
          <span className="testimonial_des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            dignissimos inventore asperiores dicta ratione fuga, ipsa omnis.
            Accusamus dolor veniam ducimus iste maxime commodi laudantium,
            facere eaque impedit quasi minus.
          </span>
          <div className="testimonial_header_img">
            {testimonialHeaderImg.map((item, i) => (
              <img src={item.img} key={i} alt="" />
            ))}
          </div>
        </div>
        <div className="testimonial_slider">
          <Slider {...settings}  slidesToShow={getMenuStyle()}>
            {testimonialSliderDatas.map((data, i) => (
              <CustomTestimonial key={i} item={data} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
