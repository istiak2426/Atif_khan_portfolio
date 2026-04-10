import React from "react";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import './about.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
        <img src={ME} alt="About " />
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>5+ years Working</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>3+ Local</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>50+ Completed</small>
          </article>
        </div>

        <p>I design clean, functional, and meaningful user experiences for the web
Blending design thinking with modern frontend development.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  );
};

export default About;
