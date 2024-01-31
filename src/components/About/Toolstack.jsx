import React from "react";
import { Col, Row } from "react-bootstrap";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons skillicon">
        
        <p className="skillName">Decision making</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons skillicon">
        
        <p className="skillName">Curiosity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons skillicon">
        
        <p className="skillName">Collaboration</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons skillicon">
        <p className="skillName">Observation</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons skillicon">
        <p className="skillName">Problem-solving</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons skillicon">
        <p className="skillName">Time management</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons skillicon">
        <p className="skillName">Communication</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons skillicon">
        <p className="skillName">Life-long learning
attitude
</p>
      </Col>

    </Row>
  );
}

export default Toolstack;
