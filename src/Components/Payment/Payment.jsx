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
          <span className="payment_des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            illum rerum obcaecati esse sit veniam dolor, quasi error officia
            
          </span>
          <span className="payment_des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            illum rerum obcaecati esse sit veniam dolor, quasi error officia
            perspiciatis excepturi eos maxime recusandae cum voluptates delectus
            nulla pariatur in! officia perspiciatis excepturi eos maxime
            recusandae cum voluptates delectus nulla pariatur in!
          </span>
        </div>
        <div className="payment_right">
          <img src={paymentMockup} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Payment;
