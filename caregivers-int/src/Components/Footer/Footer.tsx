import { useState } from "react";
import "./Footer.css";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/Ai";
import { RiFacebookFill } from "react-icons/Ri";
import { NavLink as Nav } from "react-router-dom";
import { ClassNames } from "@emotion/react";
const phone_number = "(818) 402-6006";
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <p className="contact-us">we are here for you</p>
        <a href="tel: 818-402-7890" className="phoneNumber">
          {phone_number}
        </a>
      </div>
    </>
  );
};
const Socials = () => {
  return (
    <div className="social-media-icons">
      <a href="https://www.facebook.com/" className="facebook" target="_blank">
        <RiFacebookFill />
      </a>
      <a href="https://www.linkedin.com/" className="LinkedIn" target="_blank">
        <FaLinkedinIn />
      </a>
      <a
        href="https://www.instagram.com/"
        className="instagram"
        target="_blank"
      >
        <AiFillInstagram />
      </a>
      <a href="https://www.twitter.com/" className="twitter" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};
const FeetLinks = () => {
  return (
    <div className="toe-hair">
      <Nav to="GetStarted" className="feet-links">
        Get Started
      </Nav>
      <Nav to="Services" className="feet-links">
        Services
      </Nav>
      <Nav to="About" className="feet-links">
        About
      </Nav>
      <p className="feet-links">|</p>
      <Socials />
    </div>
  );
};
const Toes = () => {
  return (
    <div className="footer-bottom">
      <p className="copyright">© 2022 made by Daniel Valdecantos</p>
    </div>
  );
};
const Footer = () => {
  const [className, setClassName] = useState<string>("");

  const addClassName = () => {
    if (window.scrollY < 100) {
      setClassName("global-footer-clear");
    } else if (window.scrollY > 100 && window.scrollY! <= 2400) {
      setClassName("global-footer-shadow");
    } else {
      setClassName("global-footer");
    }
  };
  window.addEventListener("scroll", addClassName);
  return (
    <>
      <div className={className}>
        <footer>
          <Contact />
        </footer>
      </div>
      <div className="footer-bottom">
        <div className="big-toes">
          <FeetLinks />
        </div>
        <Toes />
      </div>
    </>
  );
};

export default Footer;
