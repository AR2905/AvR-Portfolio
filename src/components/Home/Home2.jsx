import React, { useState , useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/newHome.png";
import fakehomeLogo from "../../Assets/pencile.png";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [homeLoad , setHomeLoad] = useState(false)
  useEffect(() => {
    const img3 = new Image();
    img3.src = homeLogo;

    img3.onload =() =>{
      setHomeLoad(true)
    }
  }, []);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Passionate and driven individual with a solid
foundation in web development.
              <br />
              
              <br />
              Eager to apply my skills in building dynamic and responsive
 
              <i>
                <b className="purple"> Web Applications. </b> 
              </i>
             
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple"> HTML , CSS , BootStrap, JavaScript, Python-Flask Framework ;</b>
              </i> <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple"></b> 
         
               
                  {" "}
                  Modern Javascript Library and Frameworks
           like
              <i>
                <b className="purple"> React.js </b>
              </i>
              <br></br>
              <br></br>
              I possess a <b className="purple">quick learning </b>ability,
<b className="purple"> adaptability </b> and a <b className="purple">creative mindset, </b>  making me a
valuable asset to any organization that values
innovation, collaboration, and continuous learning.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            
            {
              homeLoad ? 
              <img 
                src={ homeLogo }
                className="img-fluid" 
                alt="avatar" 
                id="profileIcon"
                  style={{transition:  'opacity 0.5s ease-in'}}
                />
            :
            <img 
                src={ fakehomeLogo }
                className="img-fluid" 
                alt="avatar" 
                id="profileIcon"
                  style={{transition:  'opacity 0.5s ease-in'}}
                />
            
            }
             
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AR2905"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashish-rathod-69a249232/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ashish.rathod.2905"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
