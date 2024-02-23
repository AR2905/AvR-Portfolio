import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Gym from "../../Assets/Projects/Gym.png";
import calc from "../../Assets/Projects/calc.png";
import ta from "../../Assets/Projects/TA.png";
import SMSS from "../../Assets/Projects/SMS.png";
import SFS from "../../Assets/Projects/SFSS.png";
import TC from "../../Assets/Projects/TC.png";
import Di from "../../Assets/Projects/DI.png";
import WA from "../../Assets/Projects/Weather.png";
import PF from "../../Assets/Projects/Portfolio.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong style={{ color: "#d3d4d7" }}> Projects </strong>
        </h1>
        <p style={{ color: "white" }}></p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SFS}
              isBlog={false}
              title="Secure file storage system"
              description="Secure storage system built with Pytho-Flask, Firebase, HTML/CSS/JS, is a webApp which is using hybrid cryptography algorithm (AES + DES) to store the confidential file securely, allow PDFs, Image, Audio and Video Files."
              ghLink="https://github.com/AR2905/Secure_Storage_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Di}
              isBlog={false}
              title="Digital Inventory"
              description="The CPC(Central Police Canteen) Inventory Management System, using HTML/CSS, JavaScript, and PHP, efficiently manages product inventory for the Central Police Canteen. It simplifies administration tasks and provide customers with an easy-to-use interface for browsing products and placing orders.

"
              ghLink="https://github.com/AR2905/Digital_inventory"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WA}
              isBlog={false}
              title="Weather App"
              description="This React weather app fetches real-time weather data from OpenWeatherMap, offering dynamic updates of temperature and background visuals tailored to user input and time of day, also it is responsive which is integrated with Tailwind CSS and error handling."
              ghLink="https://github.com/AR2905/weatherApp"
              demoLink="https://weather-app-alpha-peach-89.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PF}
              isBlog={false}
              title="My Portfolio"
              description="This is a dynamic personal portfolio crafted with React, showcasing my skills, projects, certifications, and resume. It features a responsive design for seamless browsing across various devices."
              ghLink="https://github.com/AR2905/AR_portfolio_"
              demoLink="https://avr-portfolio.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gym}
              isBlog={false}
              title="Gym Landing Page"
              description="
The gym landing page, crafted with HTML and CSS, features a sleek design for optimal user experience. Meticulous alignment, intuitive navigation, and concise content sections makes it user-friendly."
              ghLink="https://github.com/AR2905/GYM"
              demoLink="https://avr-gym.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SMSS}
              isBlog={false}
              title="Security Monitoring System"
              description="The Security Monitoring System simplifies PC security for non-tech users. It conducts scans, assesses the PC's security, and provides clear recommendations for proactive protection, prioritizing simplicity and confidentiality."
              ghLink="https://github.com/AR2905/Security_Monitoring_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TC}
              isBlog={false}
              title="Temperature converter"
              description="This project involves creating a user interface for temperature conversion. Users can input temperatures in Fahrenheit or Celsius, select the unit,
and convert it to the required specifications. Optionally, you can add Kelvin conversion for an extra challenge"
              ghLink="https://github.com/AR2905/Temperature_Converter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Calculator"
              description="This calculator design, crafted with HTML, CSS, and JavaScript, seamlessly blends functionality and aesthetics. The intuitive user interface, coupled with smooth animations, ensures a delightful and efficient calculating experience."
              ghLink="https://github.com/AR2905/Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ta}
              isBlog={false}
              title="Todo App"
              description="This Todo App design, crafted with HTML, CSS, and JavaScript, seamlessly blends functionality and aesthetics with intuitive user interface."
              ghLink="https://github.com/AR2905/ToDoApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
