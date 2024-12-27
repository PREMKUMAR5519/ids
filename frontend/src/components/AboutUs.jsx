import React from "react";
import "../styles/AboutUs.css"; // Import the external CSS
import services from '../images/services.jpg'
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us-image">
          <img
            src={services} // Replace with the actual image URL
            alt="Team discussion"
          />
        </div>
        <div className="about-us-content">
          <h2>We Empower Businesses with Innovative Digital Solutions</h2>
          <p>
            At <strong>Innoverse Digital Solutions</strong>, we specialize in
            crafting exceptional digital marketing and web development services
            tailored to your unique business needs. As a Chennai-based startup,
            we are passionate about helping businesses of all sizes embrace
            digital transformation and achieve their goals with cutting-edge
            solutions.
          </p>
          <ul>
            <li>✅ <strong>Creative & Customized Designs</strong></li>
            <li>✅ <strong>Result-Oriented Digital Marketing</strong></li>
            <li>✅ <strong>End-to-End Web Development</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
