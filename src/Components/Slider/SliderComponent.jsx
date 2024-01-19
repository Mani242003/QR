import React from "react";
import "./Slider.scss";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { sliderDate } from "../../Data/Dummy";
import img1 from "../../Images/slider/img4.png";
import { useEffect } from "react";
import sliderImg1 from "../../Images/slider/photo-1.png";


const SliderComponent = () => {
  useEffect(() => {
    getMenuStyle();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 1;
    }
    if (!document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 4;
    }
  };

  return (
    <section className="slider_wrapper" id="screenshot">
      <div className="slider_container">
        <div className="slider_header">
          <span className="slider_header_text">
            Simple & <span>Beautiful</span> User <span>Interface</span>
          </span>
          <span className="slider_header_des">
          Our platform boasts a user experience like no other, characterized by a simple and beautiful user interface.
          </span>
        </div>
        <div className="slider_main_content">
          <Slider {...settings} slidesToShow={getMenuStyle()}>
            {sliderDate.map((item, i) => (
              <img key={i} src={item.img} alt="" className="slider_img" />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
