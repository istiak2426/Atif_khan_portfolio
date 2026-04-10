import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Design & Build</h5>
      <h2>Creative Services</h2>

      <div className="container services__container">

        {/* UI/UX DESIGN */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service__list-icon" />
              <p>Design clean, modern and user-focused interfaces for web applications.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Create intuitive user experiences with strong usability principles.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Build wireframes and layout structures for better product flow.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Focus on visual hierarchy, spacing and accessibility.</p>
            </li>

          </ul>
        </article>

        {/* FRONTEND IMPLEMENTATION */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert UI designs into responsive and interactive web interfaces.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop modern UI using React.js and component-based architecture.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure smooth animations and responsive design across devices.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimize user experience with performance-focused development.</p>
            </li>

          </ul>
        </article>

        {/* PRODUCT EXPERIENCE */}
        <article className="service">
          <div className="service__head">
            <h3>Product Experience Design</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service__list-icon" />
              <p>Design user journeys that improve engagement and usability.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Focus on real-world problem solving through design thinking.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Create structured layouts for better content clarity.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Blend aesthetics with functionality for better digital products.</p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;