import React from "react";
import "./Payment.scss";
import paymentMockup from "../../Images/payment.png";

const Payment = () => {
  return (
    <section className="payment_wrapper">
      <div className="payment_container">
        <div className="payment_left">
          <span className="payment_title">
            Your payment are <span>secure </span>, Every Time
          </span>
          <span className="payment_des" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
           
Payments are always secure for you, guaranteeing safety on every occasion.
            
          </span>
          <span className="payment_des" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000">
          Ensuring the utmost security for your financial transactions is our unwavering commitment. With us, your payments are consistently and comprehensively safeguarded, fostering an environment of trust and reliability. Every time you engage in a transaction, whether it be a purchase or a transfer, rest assured that cutting-edge security measures are at the forefront of our operations.
          </span>
        </div>
        <div className="payment_right" data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2500">
          <img src={paymentMockup} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Payment;
