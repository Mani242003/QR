import React from "react";
import "./Home.scss";
import phoneRight from "../../Images/f/iPhoneLeft.png";
import phoneMiddle from "../../Images/f/iPhone1.png";
import phoneLeft from "../../Images/f/iPhoneright.png";
import playStoreImg from "../../Images/playStore.jpg";
// import AppStoreImg from "../../Images/appStoreImg.jpg"

// import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Lottie from "lottie-react";
// import playButton from "../../assets/PlayIcon.json";
import QRAnimi from "../../assets/QRAnimi.json";
import Typewriter from "typewriter-effect";
// import { BsAndroid2 } from "react-icons/bs";
// import { BsApple } from "react-icons/bs";
// import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import { Link } from "react-scroll";
import { ScrollContainer } from "react-scroll-motion";

const Home = () => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <section className="home_wrapper" id="home">
      <ScrollContainer>
        <div className="home_container">
          <div
            className="home_left"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={phoneRight} alt="" className="home_phone_right" />

            <img src={phoneMiddle} alt="" className="home_phone_middel" />
            <img src={phoneLeft} alt="" className="home_phone_left" />
          </div>
          <div className="home_right">
            <Lottie animationData={QRAnimi} style={{ width: "100px" }} />
            <span
              className="home_title"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              Welcome !{" "}
            </span>
            <span
              className="home_sub-title"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
              
       
              
            >
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 300,
                  strings: ["HAPPIEDINER", "QR CODE"],
                }}
              />
            </span>
            <span className="home_des"  data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500">
              EFFORTLESS ORDERS | CREATING WOW EXPERIENCE | DATA-DRIVEN DINING
            </span>
            <div className="home_button_Container" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2500">
              <div className="home_button_left">
                <Link to="contact" spy={true} offset={-70} duration={600}>
                  <button >
                    GET STARTED WITH FREE
                    {/* <BsFillArrowRightCircleFill /> */}
                  </button>
                </Link>
              </div>
              <div className="home_button_right">
                <Link to="contact" spy={true} offset={-70} duration={600}>
                  <button>
                    BOOK A DEMO
                    {/* <BsFillArrowRightCircleFill /> */}
                  </button>
                </Link>
              </div>
            </div>
            {/* <span className="home_aviable">Available on!</span> */}
            {/* <span className="home_bottom_icon"> */}
            <div className="home_right_download_categories" >
              <a href="https://play.google.com/store/apps/details?id=com.anonymous.happiediner">
                <img
                  className="home_right_download_categories_img1"
                  src={playStoreImg}
                  alt="" 
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                />{" "}
              </a>
              {/* <a href="https://play.google.com/store/apps/details?id=com.anonymous.happiediner"> <img src={AppStoreImg} alt="" className="home_right_download_categories_img2" /></a>  */}
            </div>

            {/* <BsAndroid2 fontSize={40} /> <BsApple fontSize={40} /> */}
            {/* </span> */}
          </div>
        </div>
      </ScrollContainer>

      {/* <h1 style={{fontSize:'30px', color:'black'}}>HELLO</h1> */}
    </section>
  );
};

export default Home;
