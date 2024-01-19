import React, { useState } from "react";
import "./AccordionSection.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import client2 from "../../Images/features/client2main.png";
import client1 from "../../Images/features/iPhone1.png";
import { TbLicense } from "react-icons/tb";
import {MdOutlineContactSupport} from "react-icons/md"
import {BsHeadset} from "react-icons/bs"
import {BiImages} from "react-icons/bi"

const AccordionSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); 
  };
  return (
    <section className="accordion_wrapper" id="Q&A">
      <div className="accordion_container">
        <div className="accordion_left" >
          <span className="accordion_left_text1">
            Frequently <span>asked</span> questions,
          </span>
          <span className="accordion_left_text2">
            It allows you to answer the questions that are most commonly asked
            surrounding your product or service. At the same time, there are
            also many other benefits to having FAQs on your website.
          </span>

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{marginBottom:'20px'}}
            // data-aos="fade-down"
            //   data-aos-easing="ease-out-cubic"
            //   data-aos-duration="1000"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <span className="accordion_icon">
                <TbLicense style={{ marginRight: "2rem" }} />
              </span>
              <span className="accordion_title">
              How do I reset my password?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              To reset your password, simply go to the login page and click on the "Forgot Password" link. Follow the instructions provided, and you will receive an email with a link to reset your password. Make sure to choose a strong and secure password to enhance the security of your account.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{marginBottom:'15px'}}
            // data-aos="fade-down"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="1500"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel1bh-header"
            >
              <span className="accordion_icon">
                <MdOutlineContactSupport  style={{ marginRight: "2rem" }} />
              </span>
              <span className="accordion_title">
              What payment methods do you accept?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We accept a variety of payment methods, including credit/debit cards, PayPal, and bank transfers. During the checkout process, you can select your preferred payment option. Rest assured that our payment gateway is secure, ensuring the safety of your financial transactions.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{marginBottom:'20px'}}
            // data-aos="fade-down"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel1bh-header"
            >
              <span className="accordion_icon">
                <BiImages style={{ marginRight: "2rem" }} />
              </span>
              <span className="accordion_title">
              How can I track my order?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Once your order has been processed and shipped, you will receive a confirmation email with a tracking number. Use this tracking number on our website or the courier's website to monitor the real-time status and location of your package. This allows you to stay informed about the delivery progress of your order.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{marginBottom:'20px'}}
            // data-aos="fade-down"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel1bh-header"
            >
              <span className="accordion_icon">
                <BsHeadset style={{ marginRight: "2rem" }} />
              </span>
              <span className="accordion_title">
              Is customer support available 24/7?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Yes, our customer support team is available 24/7 to assist you. Whether you have questions about our products, need help with an order, or encounter any issues, you can reach out to our dedicated support team through live chat on our website or by email at support@example.com. We are committed to providing timely and helpful assistance to ensure a positive customer experience.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Users
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Advanced settings
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Personal data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion> */}
        </div>
        <div className="accordion_right">
          <div className="accordion_right_imgs" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2500">
            <img src={client2} alt="" className="accordion_right_img2" />

            <img src={client1} alt="" className="accordion_right_img1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
