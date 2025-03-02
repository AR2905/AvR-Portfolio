import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { GrCertificate } from "react-icons/gr";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }

    // Get the section currently in view
    const sections = ["home", "about", "projects", "certificates", "resume"];
    let currentSection = "home";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      updateExpanded(false);
    }
  };

  // Animation variants
  const logoVariant = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 1, duration: 0.6, ease: "easeOut" },
    },
  };

  const navItemVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 1.5 + i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        {/* Logo Animation */}
        <motion.div variants={logoVariant} initial="hidden" animate="visible">
          <Navbar.Brand onClick={() => scrollToSection("home")} className="d-flex" style={{ cursor: "pointer" }}>
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {[
              { id: "home", icon: <AiOutlineHome />, text: "Home" },
              { id: "about", icon: <AiOutlineUser />, text: "About" },
              { id: "projects", icon: <AiOutlineFundProjectionScreen />, text: "Projects" },
              { id: "certificates", icon: <GrCertificate />, text: "Certificates" },
              { id: "resume", icon: <CgFileDocument />, text: "Resume" },
            ].map((item, index) => (
              <motion.div key={item.id} variants={navItemVariant} initial="hidden" animate="visible" custom={index}>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => scrollToSection(item.id)}
                    className={activeSection === item.id ? "active" : ""}
                  >
                    {item.icon} {item.text}
                  </Nav.Link>
                </Nav.Item>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
