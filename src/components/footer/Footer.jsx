import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
// import { FiInstagram } from "react-icons/fi";
// import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer>
      <a href="#" className="footer__logo">
        Albert Boyd
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        {/* <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><IoLogoTwitter /></a> */}
        <a
          href="https://www.linkedin.com/in/albert-boyd-g0429/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        {/* <a href="https://www.facebook.com//">
          <FaFacebookF target="_blank" rel="noreferrer" />
        </a> */}
        <a
          href="https://github.com/albertboyd"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AB {getYear()}. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
