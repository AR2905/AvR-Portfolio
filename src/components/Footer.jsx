/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdCall } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Ashish Rathod's Portfolio</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AVR</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AR2905"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
           
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ashish-rathod-69a249232/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
        

            <li className="social-icons">
                <a
                  href="https://wa.me/916353546776"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <BsWhatsapp />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="mailto:ash.rd2905@gmail.com"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <IoIosMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+919104029656"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <IoMdCall />
                </a>
              </li>



          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
