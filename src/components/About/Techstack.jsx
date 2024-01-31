import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiMysql 
} from "react-icons/di";
import {
  SiFirebase,
  SiFlask ,
  SiMongodb ,
  SiTailwindcss 
} from "react-icons/si";

import { FaHtml5, FaCss3Alt,FaBootstrap,FaFigma    } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt  />
        <p>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap  />
        <p>BootStrap</p>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss   />
        <p>TailWind</p>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask  />
        <p>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql  />
        <p>MySql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p>FireBase</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma  />
        <p>Figma </p>
      </Col>
    </Row>
  );
}

export default Techstack;
