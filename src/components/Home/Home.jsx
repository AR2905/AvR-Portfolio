import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/boy.png";
import myImgFake from "../../Assets/BGLOAD2.svg";
import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { FaAnglesDown } from "react-icons/fa6";
import BackgroundImage from "../../Assets/bgx.jpg";
import BackgroundLoad from "../../Assets/BGLOAD.svg";
import "./Home.css"

import { motion } from "framer-motion";

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 1.5 + i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

function Home() {

  const [bgLoaded, setBgLoaded] = useState(false);
  const [personLoad, setPersonload] = useState(false);
  useEffect(() => {
    const img = new Image();
    const img2 = new Image();
    img.src = BackgroundImage;
    img2.src = myImg;
    img.onload = () => {
      setBgLoaded(true);
    };

    img2.onload = () => {
      setPersonload(true);
    };
  }, []);


  return (
    <section>
      <Container
        fluid
        className="home-section overflow-x-hidden"
        id="home"
        style={{
          backgroundImage: bgLoaded
            ? `
        linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(12, 10, 22, 0.863)), url(${BackgroundImage})
        `
            : `linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(12, 10, 22, 0.863)), url(${BackgroundLoad})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.h1
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                style={{ paddingBottom: 15 }}
                className="heading"
              >
                Hey!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏽
                </span>
              </motion.h1>

              <motion.h1
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="heading-name"
              >
                I'M
                <strong className="main-name"> Ashish Rathod </strong>
              </motion.h1>

              <motion.div
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                style={{ padding: 45, textAlign: "left" }}
              >
                <Type />

              </motion.div>
            </Col>

            <Col
              md={5}
              style={{
                paddingBottom: 20,
                display: "flex",
                minwidth: "100%",
                justifyContent: "center",
              }}
            >
              <Tilt>
                {personLoad ? (
                  <img
                    src={myImg}
                    alt="home pic"
                    className="img-fluid home-person-img slide-in-right"
                    style={{
                      maxHeight: "450px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      opacity: "1",


                    }}
                  />
                ) : (
                  <img
                    src={myImgFake}
                    alt="home pic"
                    className="img-fluid home-person-img"
                    style={{
                      maxHeight: "450px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      opacity: "1",
                    }}
                  />
                )}
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
    </section >
  );
}

export default Home;
