/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import fakeLp from "../../Assets/fakeAbout.png";
import "./About.css"
import AboutLazy from "./AboutPlaceHolder";
import Home2 from "../Home/Home2";
function About() {
  const skills = ['All', 'Frontend', 'Backend', 'Database', 'Other'];
  const [selectedSkill, setSelectedSkill] = useState("All")


  return (
    <>
      <Home2 />
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
              className="AboutTheory"
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About<strong className="bluex"> Me</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <AboutLazy src={laptopImg} alt="ImageLp" placeholderImg={fakeLp} />
            </Col>
          </Row>
          <h1 className="project-heading">
            <strong className="bluex"> Tech Skills </strong>
          </h1>
          <div className="outer-box-skill-sorter">
            <div className="skill-sorter">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  id={index}
                  className={`skill-sorter-button ${selectedSkill === skill ? 'active' : ''}`}
                  onClick={() => setSelectedSkill(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>


          <Techstack SelSkills={selectedSkill} />

          <h1 className="project-heading">
            <strong className="bluex">Soft Skills</strong>
          </h1>
          <Toolstack />


        </Container>
      </Container>
    </>

  );
}

export default About;
