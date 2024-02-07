import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/newHome.png";
import fakehomeLogo from "../../Assets/pencile.png";
import { IoMdCall } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
function Home2() {
  const [homeLoad, setHomeLoad] = useState(false);
  useEffect(() => {
    const img3 = new Image();
    img3.src = homeLogo;

    img3.onload = () => {
      setHomeLoad(true);
    };
  }, []);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MY <span className="purple"> Glimpse </span>
            </h1>

            <p className="home-about-body" style={{ textAlign: "justify" }}>
              passion driven individual possessing a solid foundation in <b className="purple">web develeopment</b> . 
              <br />
              <br />
              
              I am fluent in
              <i>
                <b className="purple"> {" "} HTML , CSS , BootStrap, JavaScript, Python-Flask Framework ; </b>
              </i>
              <br />
              
              Alongwith, I also practice
              <b className="purple"> Modern Javascript library </b>
              and frameworks like
              <b className="purple"> React JS </b>
              for developing products. <b className="purple"></b>
              <br></br>
              <br></br>
              
              I possess a <b className="purple">quick learning </b> ability,
              <b className="purple"> adaptability </b> and a{" "}
              <b className="purple">creative mindset, </b> making me a valuable
              asset to any organization that values innovation, collaboration,
              and continuous learning.
              <br />
              <br />
              
              Passionate web developer dedicated
              in crafting dynamic and user-friendly digital experiences through{" "}
              <b className="purple">coding </b> and{" "}
              <b className="purple">innovative design</b> .
              <br /> <br />
              Awaiting to apply my skills in building dynamic and responsive
              <i>
                <b className="purple"> Web Applications. </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {homeLoad ? (
              <img
                src={homeLogo}
                className="img-fluid"
                alt="avatar"
                id="profileIcon"
                style={{ transition: "opacity 0.5s ease-in" }}
              />
            ) : (
              <img
                src={fakehomeLogo}
                className="img-fluid"
                alt="avatar"
                id="profileIcon"
                style={{ transition: "opacity 0.5s ease-in" }}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              {" "}
              <span className="purple">Connect</span> Me
            </h1>

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
                  href="https://wa.me/916353546776"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <BsWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ash.rd2905@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <IoIosMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+919104029656"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <IoMdCall />
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
