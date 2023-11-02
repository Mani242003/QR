import React from "react";
import "./Video.scss";
// import VideoPlayer from 'react-video-js-player';
// import video from "../../video/video.mp4";
// import { Player,BigPlayButton  } from 'video-react';
// import Thubmail from "../../Images/thubmail.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link} from 'react-scroll';
import ReactPlayer from 'react-player/youtube'
// import { Player } from 'video-react';

const Video = () => {
  // const src =video
  return (
    <section className="video_wrapper">
      <div className="video_container">
        <div className="video_left">
          <span className="video_title">Watch the <span>One-minute</span> video to learn how.</span>
          <span className="video_des">
            The wireless cheesed on your bike mate zonked a load of old tosh
            hunky dory it's all gone to pot haggle william car boot
             pear shaped
            geeza.
          </span>
         <Link to="home">
         <button>
            Get Started
            <BsFillArrowRightCircleFill />
          </button>
          </Link>
        </div>
        <div className="video_right">
        <ReactPlayer width={document.documentElement.clientWidth <= 769 ? 370:520} height={document.documentElement.clientWidth <= 769 ? 230:370} url='https://youtu.be/jEwftk8SNuA?si=J0LS9mfyC5-Dywzi'/>
        {/* <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player> */}
        </div>
      </div>
    </section>
  );
};

export default Video;
