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
              My <span className="intro-yellow"> Glimpse </span>
            </h1>

            <p className="home-about-body" style={{ textAlign: "justify" }}>
              Passion driven individual possessing a solid foundation in{" "}
              <b className="intro-yellow">Fullstack Web develeopment</b>
              <br />
              <br />I am fluent in creating responsive UIs with

              <b className="intro-yellow"> HTML, CSS, Bootstrap, Tailwind CSS </b>and{" "}
              <b className="intro-yellow"> Material UI </b>.
              <br />
              Additionally, I excel in modern web app development with
              <b className="intro-yellow"> Javascript</b>
              ,
              <b className="intro-yellow"> React JS </b>
              and
              <b className="intro-yellow"> Next JS </b> .
              <br></br>I am proficient in building scalable backend
              applications using
              <b className="intro-yellow"> Node Js </b> and{" "}
              <b className="intro-yellow">Express Js </b>.
              <br />
              Furthermore, I am knowledgeable in{" "}
              <b className="intro-yellow"> MongoDb</b>,
              <b className="intro-yellow"> MySQL </b> and{" "}
              <b className="intro-yellow"> PostgreSQL </b> for efficient data management and leverage <b className="intro-yellow">Prisma ORM</b> for seamless database interactions.

              <br></br>
              <br></br>I possess a <b className="intro-yellow">quick learning </b>{" "}
              ability,
              <b className="intro-yellow"> adaptability </b> and a{" "}
              <b className="intro-yellow">creative mindset</b>, making me a valuable
              asset to any organization that values innovation, collaboration,
              and continuous learning.
              <br />
              <br />
              Passionate web developer dedicated in crafting dynamic and
              user-friendly digital experiences through{" "}
              <b className="intro-yellow">coding </b> and{" "}
              <b className="intro-yellow">innovative designs.</b>
              <br /> <br />
              Awaiting to apply my skills in building dynamic and responsive
              <i>
                <b className="intro-yellow"> Web Applications. </b>
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
              <span className="intro-yellow">Connect</span> Me
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
