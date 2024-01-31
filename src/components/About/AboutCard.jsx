import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="bluey">Ashish Rathod </span>
            from <span> Vadodara, Gujarat.</span>
            <br /><br />
            I am currently pursuing my<span className="bluey"> 4<sup>th</sup> year </span>of B.tech in Computer science and enginnering from Parul University.
            <br />
            <br />

            Passionate<span className="bluey">  web developer</span> dedicated to crafting dynamic and user-friendly digital experiences through innovative coding and design.
            
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
