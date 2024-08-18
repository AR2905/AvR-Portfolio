/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Greetings, myself <span className="bluey">Ashish Rathod </span>
            from <span> Vadodara, Gujarat.</span>
            <br /><br />
            I have completed my <span className="bluey"> B.Tech. </span> in Computer science and enginnering from Parul University with an aggregate of <span className="bluey"> 8.3 CGPA</span>.
            <br />
            <br />

            My Internships...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Oasis InfoByte - Web Development and Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Vreendaar IT Solution Pvt Ltd - Web development
            </li>
          </ul>

          <p  style={{color: '#646494' }}>
            "Elevate your web presence with code – where innovation meets pixels and transforms ideas into interactive reality"{" "}
          
          <span style={{ color: "#484a94" }}>- Ashish Rathod</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
