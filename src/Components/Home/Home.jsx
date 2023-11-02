import React, { useState } from "react";
import "./Home.scss";
import phoneRight from "../../Images/f/iPhoneLeft.png";
import phoneMiddle from "../../Images/f/iPhone1.png";
import phoneLeft from "../../Images/f/iPhoneright.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Lottie from "lottie-react";
import playButton from "../../assets/PlayIcon.json";
import QRAnimi from "../../assets/QRAnimi.json";
import Typewriter from "typewriter-effect";
import { BsAndroid2 } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import { Link } from "react-scroll";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="home_wrapper" id="home">
      <ScrollContainer>
      <div className="home_container">
        <div className="home_left">
          <img src={phoneRight} alt="" className="home_phone_right" />

          <img src={phoneMiddle} alt="" className="home_phone_middel" />
          <img src={phoneLeft} alt="" className="home_phone_left" />
        </div>
        <div className="home_right">
          <Lottie animationData={QRAnimi} style={{ width: "100px" }} />
          <span className="home_title">Welcome To Our </span>
          <span className="home_sub-title">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 300,
                strings: ["Smart QR APP", "Smart QR WEB"],
              }}
            />
          </span>
          <span className="home_des">
            Semper lacus cursus porta tellus neque dolor primis magna nullam
            laoreet potenti undo tempor ipsum at sagittis magna congue primis
            ultrice
          </span>
          <div className="home_button_Container">
            <div className="home_button_left">
              <Link to="contact" spy={true} offset={-70} duration={600}>
                <button>
                  Get Started
                  <BsFillArrowRightCircleFill />
                </button>
              </Link>
            </div>

            <div className="home_button_right_lottie">
              <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="jEwftk8SNuA?si=27HAXGUTEGux78pL"
                onClose={() => setOpen(false)}
              />

              <Lottie
                animationData={playButton}
                style={{ width: "130px" }}
                onClick={() => setOpen(true)}
              />

              <div className="home_lotiee_text_container">
                <span className="homeLotieetext1">Watch our Video</span>
                <span className="homeLotieetext2">Duration : 00:45 sec</span>
              </div>
            </div>
          </div>
          <span className="home_aviable">Available on!</span>
          <span className="home_bottom_icon">
            <BsAndroid2 fontSize={40} /> <BsApple fontSize={40} />
          </span>
        </div>
      </div>
      </ScrollContainer>

      {/* <h1 style={{fontSize:'30px', color:'black'}}>HELLO</h1> */}
    </section>
  );
};

export default Home;
