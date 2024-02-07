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
            I am currently in my <span className="bluey"> final year, </span> Pursuing Bachelors in Computer science and enginnering from Parul University.
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
