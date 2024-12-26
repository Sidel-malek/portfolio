import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiSpringboot,
  SiDjango,
  SiApachespark,
  SiApachehadoop,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const technologies = [
    { icon: <DiJava />, name: "Java" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiAngularSimple />, name: "Angular" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiApachespark />, name: "Apache Spark" },
    { icon: <SiApachehadoop />, name: "Apache Hadoop" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          title={tech.name} // Tooltip natif avec `title`
          style={{ textAlign: "center" }}
        >
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
