/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiMysql,
  DiJqueryLogo
} from "react-icons/di";
import {
  SiFirebase,
  SiFlask,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiZod,
  SiMui,
  SiPostgresql,
  SiPrisma,
  SiShadcnui
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaWordpress, FaPhp } from "react-icons/fa6";
// import {  } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaFigma, FaNode } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
function Techstack({ SelSkills }) {
  console.log(SelSkills);

  const techStacks = {
    Frontend: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <SiTailwindcss />, name: "TailWind" },
      { icon: <SiMui />, name: "Material UI" },
      { icon: <SiShadcnui />, name: "Shadcn UI" },
      { icon: <DiJavascript1 />, name: "JavaScript" },
      { icon: <DiJqueryLogo />, name: "jQuery" },
      { icon: <TbBrandTypescript />, name: "TypeScript" },
      { icon: <SiZod />, name: "Zod" },
      { icon: <DiReact />, name: "React" },
      { icon: <SiRedux />, name: "Redux Toolkit" },
      { icon: <TbBrandNextjs />, name: "Next Js" },
    ],
    Backend: [
      { icon: <FaNode />, name: "NodeJs" },
      { icon: <SiExpress />, name: "ExpressJs" },
      { icon: <FaPhp />, name: "PHP" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <DiPython />, name: "Python" },
    ],
    Database: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <DiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiPrisma />, name: "Prisma" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
    Other: [
      { icon: <DiGit />, name: "Git" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <FaWordpress />, name: "Wordpress" },
    ],
  };

  const filteredTech = SelSkills === 'All'
    ? Object.values(techStacks).flat()
    : techStacks[SelSkills];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {filteredTech.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons tech-icons-mob" key={index}>
          {tech.icon}
          <p style={{ userSelect: 'none' }}>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
