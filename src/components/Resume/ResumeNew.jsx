import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/AR_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import resimg from "../../Assets/../Assets/resume_image.jpg"
import resimgLoad from '../../Assets/../Assets/resu.svg'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {

  const [resLOad, setResLoad] = useState(false)

  useEffect(() => {
    const img7 = new Image()

    img7.src = resimg

    img7.onload = () => {
      setResLoad(true)
    }
  } , 
  [])

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <div className="res-box Container">
        
        {
          resLOad ? 
          <img src={resimg} alt="" className="ResImg"/>
 :        
 <img src={resimgLoad} alt="" className="ResImg"/>
         
        }
        </div>
        {/* Remove or comment out the unnecessary content below */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
