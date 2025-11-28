import React from "react";
import "./about.css";
import ME_1 from "../../assets/me-about-1.png";
import ME_2 from "../../assets/me-about-2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME_1} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>14+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>26+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>

          <p>
            Hello! I'm Albert Boyd, a Louisiana-based Full-Stack Developer
            proficient in an array of modern technologies including Python 3,
            PHP, Java JavaScript ES6+, SQL, Django 4, MongoDB, Node.js, React,
            Angular and more. I'm passionate about creating dynamic, efficient,
            and user-friendly web applications. I have hands-on experience in
            developing e-commerce platforms, utilizing technologies such as
            Next.js, Strapi, Tailwind, Firebase, and Redux. I am also
            experienced in managing the full project lifecycle from setup to
            deployment. My journey in tech is supported by my prior experiences,
            including my time as a Junior developer at AAXA and a Restaurant
            Manager, which honed my skills in teamwork, problem-solving, and
            operations management. Feel free to explore my projects and get in
            touch at albertboyd0429@gmail.com. I'm always open to new
            opportunities and collaborations!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
