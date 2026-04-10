import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Tools & Design Expertise</h5>
      <h2>UI/UX Skills</h2>

      <div className="container experience__container">

        {/* DESIGN FUNDAMENTALS */}
        <div className="experience__frontend">
          <h2>Design Fundamentals</h2>

          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>UI Design</h4>
                <small className="text-light">Strong Understanding</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>UX Principles</h4>
                <small className="text-light">Applied in Projects</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Responsive Design</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Wireframing</h4>
                <small className="text-light">Familiar</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Prototyping</h4>
                <small className="text-light">Basic Experience</small>
              </div>
            </article>

          </div>
        </div>

        {/* TOOLS & FRONTEND */}
        <div className="experience__backend">
          <h2>Tools & Frontend Skills</h2>

          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Design Tool</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Adobe XD</h4>
                <small className="text-light">UI Mockups</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>HTML & CSS</h4>
                <small className="text-light">UI Implementation</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Interactive UI</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Component-Based UI</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;