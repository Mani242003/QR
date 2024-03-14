import React, { useRef, useEffect } from "react";
import "./Home.scss";
import ITLOGO from "../../Images/2024/hdLogo.png";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import { Link } from "react-scroll";
import { ScrollContainer } from "react-scroll-motion";
import videobg from "../../Images/2024/v7.mp4";
import CountDown from "./CountDown/CountDown";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust this value to set the desired playback speed (e.g., 0.5 for half speed)
    }
  }, []);
  return (
    <section className="home_wrapper" id="home">
      <ScrollContainer>
        <div className="home_container">
          <CountDown />

          <video ref={videoRef} src={videobg} autoPlay loop muted  />
          <div className="homeContent">

            <span className="span1">
             
              Welcomes you to ...
            </span>
            <img
              src={ITLOGO}
              alt=""
              className="home_phone_logo"
              width={200}
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            />
            <span
              className="span2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
              style={{ fontSize: "25px",  }}
            >
              Department of{" "}
            </span>
            <span className="span3">Information Technology</span>
            {/* <span className="span4">Technology</span> */}
            <Link to="contact" spy={true} offset={-70} duration={600}>
              <button className="btn">Explore Events !</button>
            </Link>
          </div>
        </div>
      </ScrollContainer>
    </section>
  );
};

export default Home;

// <div
//             className="home_left "
//             data-aos="fade-right"
//             data-aos-easing="ease-out-cubic"
//             data-aos-duration="2000"

//           >

//             <img src={kingsLogo} alt="" className="home_phone_logo" width={70} />
//             <span
//               className="home_title"
//               data-aos="fade-up"
//               data-aos-easing="ease-out-cubic"
//               data-aos-duration="500"
//               style={{fontSize:'25px',}}
//             >
//               Department of !{" "}
//             </span>
//               <span
//               className="home_sub-title"
//               data-aos="fade-up"
//               data-aos-easing="ease-out-cubic"
//               data-aos-duration="500"

//             >
//               Information

//             </span>
//             <span
//               className="home_sub-title"
//               data-aos="fade-up"
//               data-aos-easing="ease-out-cubic"
//               data-aos-duration="500"

//             >
//              Technology

//             </span>
//             <span
//               className="home_title"
//               data-aos="fade-up"
//               data-aos-easing="ease-out-cubic"
//               data-aos-duration="500"
//               style={{fontSize:'25px',marginTop:'3%'}}
//             >
//               Welcomes you to{" "}
//             </span>
//             <img src={ITLOGO} alt="" className="home_phone_logo" width={400} />
{
  /* <span style={{cursor:"pointer"}} className="logoName">WEBIT 2k'24</span> */
}
{
  /* <img src={timerDemo} alt="" className="home_phone_logo" style={{marginTop:'2%'}} width={380} /> */
}

{
  /*   */
}
{
  /* <div className="home_button_Container" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2500">
              <div className="home_button_left">
                <Link to="contact" spy={true} offset={-70} duration={600}>
                  <button >
                    GET STARTED WITH FREE
                  </button>
                </Link>
              </div>
              <div className="home_button_right">
                <Link to="contact" spy={true} offset={-70} duration={600}>
                  <button>
                    BOOK A DEMO
                  </button>
                </Link>
              </div>
            </div> */
}
{
  /* </div>
          <div className="home_right"> */
}
{
  /* <Lottie animationData={QRAnimi} style={{ width: "100px" }} /> */
}
{
  /* <span
              className="home_title"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              Welcome !{" "}
            </span> */
}
{
  /* <span
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
            </span> */
}
{
  /* <div className="home_button_Container" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2500">
              <div className="home_button_left">
                <Link to="contact" spy={true} offset={-70} duration={600}>
                  <button >
                    GET STARTED WITH FREE
                  </button>
                </Link>
              </div>
              <div className="home_button_right">
                <Link to="contact" spy={true} offset={-70} duration={600}>
                  <button>
                    BOOK A DEMO
                  </button>
                </Link>
              </div>
            </div> */
}

{
  /* </div> */
}
