import React, { useState, useEffect, lazy } from "react";
import Pre from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy load sections
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Certificate = lazy(() => import("./components/Certi/Certificate"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function App() {
  const [load, updateLoad] = useState(true);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 } // Adjust this to determine how much visibility triggers loading
    );

    document.querySelectorAll(".section").forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />

        {/* Lazy-loaded sections without Suspense */}
        <section id="home" className="section">
          {visibleSections["home"] && <Home />}
        </section>

        <section id="about" className="section">
          {visibleSections["about"] && <About />}
        </section>

        <section id="projects" className="section">
          {visibleSections["projects"] && <Projects />}
        </section>

        <section id="certificates" className="section">
          {visibleSections["certificates"] && <Certificate />}
        </section>

        <section id="resume" className="section">
          {visibleSections["resume"] && <Resume />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
