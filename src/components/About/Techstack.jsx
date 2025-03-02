/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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
import { FaHtml5, FaCss3Alt, FaBootstrap, FaFigma, FaNode } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";

function Techstack({ SelSkills }) {
  const techStacks = {
    Frontend: [
      { icon: <FaHtml5 />, name: "HTML", proficiency: 95 },
      { icon: <FaCss3Alt />, name: "CSS", proficiency: 90 },
      { icon: <FaBootstrap />, name: "Bootstrap", proficiency: 80 },
      { icon: <SiTailwindcss />, name: "TailWind", proficiency: 90 },
      { icon: <SiMui />, name: "Material UI", proficiency: 80 },
      { icon: <SiShadcnui />, name: "Shadcn UI", proficiency: 80 },
      { icon: <DiJavascript1 />, name: "JavaScript", proficiency: 90 },
      { icon: <DiJqueryLogo />, name: "jQuery", proficiency: 75 },
      { icon: <TbBrandTypescript />, name: "TypeScript", proficiency: 80 },
      { icon: <SiZod />, name: "Zod", proficiency: 70 },
      { icon: <DiReact />, name: "React", proficiency: 90 },
      { icon: <SiRedux />, name: "Redux Toolkit", proficiency: 85 },
      { icon: <TbBrandNextjs />, name: "Next Js", proficiency: 80 },
    ],
    Backend: [
      { icon: <FaNode />, name: "NodeJs", proficiency: 85 },
      { icon: <SiExpress />, name: "ExpressJs", proficiency: 85 },
      { icon: <FaPhp />, name: "PHP", proficiency: 60 },
      { icon: <SiFlask />, name: "Flask", proficiency: 55 },
      { icon: <DiPython />, name: "Python", proficiency: 60 },
    ],
    Database: [
      { icon: <SiMongodb />, name: "MongoDB", proficiency: 85 },
      { icon: <DiMysql />, name: "MySQL", proficiency: 80 },
      { icon: <SiPostgresql />, name: "PostgreSQL", proficiency: 75 },
      { icon: <SiPrisma />, name: "Prisma", proficiency: 70 },
      { icon: <SiFirebase />, name: "Firebase", proficiency: 80 },
    ],
    Other: [
      { icon: <DiGit />, name: "Git", proficiency: 90 },
      { icon: <FaFigma />, name: "Figma", proficiency: 75 },
      { icon: <FaWordpress />, name: "Wordpress", proficiency: 70 },
    ],
  };

  const filteredTech = SelSkills === 'All'
    ? Object.values(techStacks).flat()
    : techStacks[SelSkills];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {filteredTech.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons tech-icons-mob" key={index}>
          <div className="tech-icons-inner">
            <div className="skill-icon-container">
              {tech.icon}
              <div className="skill-progress-circle" style={{ '--progress': `${tech.proficiency}%` }}>
                <div className="progress-overlay"></div>
              </div>
            </div>
            <div className="skill-percentage">{tech.proficiency}%</div>
          </div>
          <p style={{ userSelect: 'none' }}>{tech.name}</p>

        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
