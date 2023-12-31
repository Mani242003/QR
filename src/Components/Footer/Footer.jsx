import "./Footer.scss";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-scroll";
import { FiMail } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdQrCodeScanner } from "react-icons/md";
import Lottie from "lottie-react";
import logoAnimi from "../../assets/QRAnimi.json"

// import Logo from "../../Images/";

const Footer = () => {
  return (
    <section className="footer-wrapper" id="footer">
      <div className="footer-container">
    
        <div className="footer-middel-container" >
          
          <div className="footer-middel-col1-container"  
    >
          <div className="footer-top-container">
           <Lottie animationData={logoAnimi} style={{width:"70px"}}/>
         
          
    </div>
            <span className="footer-col1-titel-text1">CONTACT INFO</span>
            
            <div className="footer-col1-row">
              <IoLocationOutline size={55} />
              <span className="footer-col1-address-text footer-common-text-style">
                No 52/1, Meenambal Salai, Vivekandhar Nagar, Kodungaiyur, (Near
                S.K Mahal), Chennai – 600118
              </span>
            </div>
            <div className="footer-col1-row">
              <LuPhoneCall className="footer-col1-icon" />

              <a href="tel:9345336553" style={{color:'white',textDecoration:"none"}}>
                <span className="footer-col1-call-text footer-common-text-style">
                  +91 9345336553
                </span>
              </a>
            </div>
            <div className="footer-col1-row">
              <FiMail className="footer-col1-icon" />

              <a href="mailto:jerome@stigmatatech.com" style={{color:'white',textDecoration:"none"}}>
                <span className="footer-col1-mail-text footer-common-text-style">
                  jerome@stigmata.co.in
                </span>
              </a>
            </div>
            <div className="footer-col1-row">
              <TbWorld />

              <a  href="https://stigmatatech.com/"  style={{color:'white',textDecoration:"none"}} target="_blank">
                <span className="footer-col1-web-text footer-common-text-style">
                  www.clousec.io
                </span>
              </a>
            </div>
          </div>
          <div className="footer-middel-col2-container"  >
            <div className="footer-middel-col2lleft">
              <Link  to="mainPage"
                    spy={true}
                    offset={-60}
                    duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Home
                </span>
              </Link>
              <Link to="fea"
                    spy={true}
                    offset={-60}
                    duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Features
                </span>
              </Link>
              <Link to="roadMap"
                    spy={true}
                    offset={-60}
                    duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Roadmap
                </span>
              </Link>
              <Link
               to="solution"
               spy={true}
               offset={-60}
               duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Solutions
                </span>
              </Link>
              <Link  to="contact"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Contact
                </span>
              </Link>
            </div>
            <div className="footer-middel-col2-right">
              <Link>
                <span className="footer-col1-web-text footer-common-text-style">
                  Our Team
                </span>
              </Link>
              <Link>
                <span className="footer-col1-web-text footer-common-text-style">
                  Our services
                </span>
              </Link>
              <Link>
                <span className="footer-col1-web-text footer-common-text-style">
                  Our Blog
                </span>
              </Link>
              <Link>
                <span className="footer-col1-web-text footer-common-text-style">
                  Our Products
                </span>
              </Link>
              <Link>
                <span className="footer-col1-web-text footer-common-text-style">
                  Contact us{" "}
                </span>
              </Link>
            </div>
          </div>
          <div className="footer-middel-col3-container"   >
            <span className="footer-col1-titel-text1">Follow us</span>
            <div className="footer-social-links">
              <div className="footermiddel-col3-link">
                <Link to="https://stigmatatech.com/">
                <BiWorld size={24} /></Link>
                
              </div>
              <div className="footermiddel-col3-link">
                <FaFacebookF size={24} />
              </div>
              <div className="footermiddel-col3-link">
                <AiFillLinkedin size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-container">
          <span className="footer-bottom-text">
            Copyright © 2023 ClouSec. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;

// <div className="f-left-side">
//           <img src={Logo} alt="" width={100} />
//           <span className="f-left-des secondaryText">
//             Our vision is to give a best solution
//             <br />  for all people.
//           </span>
//         </div>
//         <div className="f-right-side">
//           <span className="f-right-side-title primaryText ">
//             Information
//             <br />
//           </span>

//           <span className="f-right-side-des secondaryText" >
//           <FaLocationDot /> STIGMATA TECHNO SOLUTIONS <br/> No 23, 2nd Floor, Vembuli Amman Koil
//             Street,<br/> Pazhavanthangal Chennai 600 114.<br/> (Near Chennai Airport)
//           </span>
//           <div className="f-menu">

//             <span>
//              <a href="https://stigmatatech.com/services/">Services</a>
//             </span>
//             <span>
//               <a href="https://stigmatatech.com/services/">Product</a>
//             </span>
//             <span>
//               <a href="https://stigmatatech.com/about/">About us</a>
//             </span>
//           </div>
//         </div>
