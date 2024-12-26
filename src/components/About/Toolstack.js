import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiGithub,
  SiDocker,
  SiApachemaven,
  SiTrello,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiApachemaven />, name: "Apache Maven" },
    { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiTrello />, name: "Trello" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          title={tool.name} // Affiche un tooltip natif au survol
          style={{ textAlign: "center" }} // Centrage des icônes
        >
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
