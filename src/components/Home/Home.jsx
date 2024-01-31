import React, { useRef, useState ,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/boy.png";
import myImgFake from "../../Assets/BGLOAD2.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { FaAnglesDown } from "react-icons/fa6";
import BackgroundImage from "../../Assets/bgx.jpg"
import BackgroundLoad from "../../Assets/BGLOAD.svg"


function Home() {
  const scrollButtonRef = useRef(null);

  const [bgLoaded, setBgLoaded] = useState(false);
  const [personLoad, setPersonload] = useState(false);
  useEffect(() => {
    const img = new Image();
    const img2 = new Image();
    img.src = BackgroundImage;
    img2.src = myImg ;
    img.onload = () => {
      setBgLoaded(true);
    };

    img2.onload =() =>{
      setPersonload(true)
    }
  }, []);

  const scrollToBottom = () => {
    if (scrollButtonRef.current) {
      const introSection = document.getElementById("about");
      const introSectionTop = introSection.offsetTop;
      let desiredMargin = -80; // Default desired margin

      if (window.innerWidth < 768){
       desiredMargin = 20; // Default desired margin
      }
      if (window.innerWidth >= 768 && window.innerWidth <= 992){
        desiredMargin = -40; // Default desired margin
       }
      
      const scrollTarget = introSectionTop - desiredMargin;
      window.scrollTo({
        top: scrollTarget,
        behavior: "smooth",
      });
    }
  };
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{
        backgroundImage: bgLoaded ? `
        linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(12, 10, 22, 0.863)), url(${BackgroundImage})
        ` : `linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(12, 10, 22, 0.863)), url(${BackgroundLoad})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
      }}>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏽
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ashish Rathod </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <button
                  ref={scrollButtonRef}
                  className="scrollbtn"
                  onClick={scrollToBottom}
                  style={{ position: "relative", zIndex: "999", color: "white" }}
                >
                  <FaAnglesDown className="scroll-icon"></FaAnglesDown>
                </button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 , display:'flex', minwidth:"100%", justifyContent:"center"}}>
              <Tilt>

              
                

{personLoad ? <img
                  src={ myImg } 
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px", marginLeft:"auto" , marginRight:"auto",   opacity: '1',
            transition:  'opacity 0.5s ease-in'}}
                /> : <img
                  src={ myImgFake} 
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px", marginLeft:"auto" , marginRight:"auto",   opacity: '1',
            transition: 'opacity 0.5s ease-in'  }}
                />}
                

              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
