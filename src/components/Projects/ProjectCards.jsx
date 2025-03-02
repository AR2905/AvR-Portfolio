import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import preLoadImg from '../../Assets/Projects/placeholder.svg'

function ProjectCards(props) {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img5 = new Image();
    img5.src = props.imgPath;

    img5.onload = () => {
      setBgLoaded(true);
    };
  }, [props.imgPath]); // Include props.imgPath in the dependency array

  return (
    <Card className="project-card-view h-100">
      <Card.Img variant="top" src={bgLoaded ? props.imgPath : preLoadImg} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>
        <div className="mt-auto">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
