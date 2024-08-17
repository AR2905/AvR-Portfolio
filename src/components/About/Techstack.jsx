// import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiMysql, 
  DiJqueryLogo
} from "react-icons/di";
import {
  SiFirebase,
  SiFlask ,
  SiMongodb ,
  SiTailwindcss ,
  SiExpress, 
  SiRedux
} from "react-icons/si";
import { FaWordpress,FaPhp } from "react-icons/fa6";
// import {  } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt,FaBootstrap,FaFigma,FaNode     } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

    
      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <FaHtml5 />
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <FaCss3Alt  />
        <p>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <FaBootstrap  />
        <p>BootStrap</p>
      </Col>


      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <SiTailwindcss   />
        <p>TailWind</p>
      </Col>


      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <DiJavascript1 />
        <p>JavaScript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <DiJqueryLogo />
        <p>jQuery</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <DiReact />
        <p>React</p>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <SiRedux />
        <p>Redux Tookit</p>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <FaNode />
        <p>NodeJs</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <SiExpress />
        <p>ExpressJs</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
      <FaPhp/>

        <p>PHP</p>
      </Col>

<Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <SiMongodb />
        <p>MongoDB</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <DiMysql  />
        <p>MySql</p>
      </Col>
       <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <SiFirebase />
        <p>FireBase</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <DiPython />
        <p>python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <SiFlask  />
        <p>Flask</p>
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <DiGit />
        <p>Git</p>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
        <FaFigma  />
        <p>Figma </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons tech-icons-mob">
      <FaWordpress/>
        <p>Wordpress </p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
