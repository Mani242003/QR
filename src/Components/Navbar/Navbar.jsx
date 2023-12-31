import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { MdQrCodeScanner } from "react-icons/md";
import { routes } from "../../Data/Dummy";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import OutsideClickHandler from "react-outside-click-handler";
import Menuicon from "../../assets/MenFin.json";
import Lottie from "lottie-react";
import GetStartButton from "../../assets/GetStartButton.json";
import { Link } from "react-scroll";

const Navbar = () => {
  const [cliked, setCliked] = useState(false);
  const [nav, setNav] = useState(false);
  const [menuOpened, setmenuOpened] = useState(false);
  useEffect(() => {
    if (document.documentElement.clientWidth <= 769) {
      setmenuOpened(true);
    }
  }, []);

  const handelClicked = (clicked) => {
    setCliked(!clicked);
  };
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const style1 = {
    width: "250px",
    marginBottom: "7%",
    cursor: "pointer",
  };
  const style2 = {
    width: "280px",
    height: "200px",
  };
  return (
    <section className="nav_wrapper">
      <div className={nav ? "nav_container navActive" : "nav_container"}>
        <div className="nav_logo" >
          <Link to="home" spy={true} offset={-70} duration={600}>
            <MdQrCodeScanner
              size={40}
              color="white"
              className="nav_logo_icon"
              style={{cursor:"pointer"}}

            />
            <span style={{cursor:"pointer"}} >Smart QR</span>
          </Link>
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setCliked(false);
          }}
        >
          <div className={cliked ? "nav_menu active" : "nav_menu "}>
            <ul className="nav_menu_ul_container">
              {routes.map((route, i) => (
                <li key={i} className="nav_li">
                  <Link

                    to={route.path}
                    spy={true}
                    offset={-70}
                    duration={600}
                    onClick={() => {
                      setCliked(false);
                    }}
                    style={{cursor:"pointer"}}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="nav_button_container">
              
              <Link to="contact" spy={true} offset={-70} duration={600}><button className="btn" >Get Started</button></Link>
              <Link to="contact" spy={true} offset={-70} duration={600}>
                <Lottie
                  animationData={GetStartButton}
                  style={menuOpened ? { ...style2 } : { ...style1 }}
                />
              </Link>
            </div>
          </div>
        </OutsideClickHandler>

        <div className="menu_icon">
          {cliked ? (
            <AiOutlineClose
              size={33}
              style={{ marginRight: "45px" }}
              color="white"
              onClick={() => {
                handelClicked(cliked);
              }}
            />
          ) : (
            <Lottie
              animationData={Menuicon}
              style={{ width: "95px" }}
              color="white"
              onClick={() => {
                handelClicked(cliked);
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
