import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import emailjs from "emailjs-com";
// import { client } from "../../client";

import "./Footer.scss";

const FooterComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSUBMIT = () => {
    setLoading(true);

    const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const EMAIL = import.meta.env.VITE_REACT_APP_EMAIL;

    const contact = {
      to_email: EMAIL,
      name: name,
      email: email,
      message: message,
    };

    // ---- 200 emails monthly for free ----
    emailjs.send(SERVICE_ID, TEMPLATE_ID, contact, PUBLIC_KEY).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });

    // ---- This is for saving into the backend.
    // ---- Not recommended because you would always need to go and
    // ---- check from sanity if you have received an email
    // ---- Let's still keep this.
    // const contact = {
    //   name: name,
    //   email: email,
    //   message: message,
    // };

    // client.create(contact).then(() => {
    //   setLoading(false);
    //   setIsFormSubmitted(true);
    // });
  };

  return (
    <React.Fragment>
      <h2 className="head-text">
        Feel free <span>to contact</span> me.
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:kuite.s@hotmail.com" className="p-text">
            kuite.s@hotmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +358445814545" className="p-text">
            +358 44 58 14545
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSUBMIT}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h2 className="head-text">Thank you for getting in touch!</h2>
        </div>
      )}
    </React.Fragment>
  );
};

export const Footer = AppWrap(
  MotionWrap(FooterComp, "app__footer"),
  "contact",
  "app__whitebg"
);
