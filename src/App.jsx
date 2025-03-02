import React, { useState, useEffect, lazy, Suspense } from "react";
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

        {/* Lazy-loaded sections with Suspense fallback */}
        <section id="home" className="section">
          <Suspense fallback={<div>Loading Home...</div>}>
            {visibleSections["home"] && <Home />}
          </Suspense>
        </section>

        <section id="about" className="section">
          <Suspense fallback={<div>Loading About...</div>}>
            {visibleSections["about"] && <About />}
          </Suspense>
        </section>

        <section id="projects" className="section">
          <Suspense fallback={<div>Loading Projects...</div>}>
            {visibleSections["projects"] && <Projects />}
          </Suspense>
        </section>

        <section id="certificates" className="section">
          <Suspense fallback={<div>Loading Certificates...</div>}>
            {visibleSections["certificates"] && <Certificate />}
          </Suspense>
        </section>

        <section id="resume" className="section">
          <Suspense fallback={<div>Loading Resume...</div>}>
            {visibleSections["resume"] && <Resume />}
          </Suspense>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
