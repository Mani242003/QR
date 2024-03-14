import React, { useRef, useState, useEffect } from "react";
import "./contact.scss";



import { motion, useInView, useAnimation } from "framer-motion";

const Contact = () => {

  const ref = useRef(null);
  const isView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isView) {
      mainControls.start("visible");
    }
  }, [isView]);

  return (
    <section className="contract_wrapper" id="contact">
      <div className="contact_container" ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          className="contact_box"
        >
          
          <div className="contact form"style={{textAlign:'center'}} >
          <span  style={{textAlign:'center',color:'#EE5312'}}>
                Contact
              </span>

          
          </div>
          <div className="contact info">
            <div className="contactinfoBorder">
              <span className="contact_right_bottom_header">
                Location
              </span>
            </div>
            <span className="contact_right_bottom_des">
              Kings Engineering College Opposite to Hyundai Motors,
              Chennai-Banglore Highway Irungattukottai 
              Sriperumbudur 602117
              <br />
            </span>
           
          </div>
          <div className="contact info" style={{marginTop:'140px'}} >
            <div className="contactinfoBorder">
              <span className="contact_right_bottom_header">
                Student Incharge
              </span>
            </div>
            <span className="contact_right_bottom_des">
              Name : Kingston Daniel Raj 
              <br />
              Mobile: +91 6374732403
              <br />
              Name : Kingston Daniel Raj 
              <br />
              Mobile: 97908 45787, 93453 36553
            </span>
          </div>
          
          <div className="contact map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5741515688837!2d79.97933687377665!3d12.999066887318794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cc0c96b8fff%3A0x77248c47f364dcf5!2sKings%20Engineering%20College!5e0!3m2!1sen!2sin!4v1710045529026!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
