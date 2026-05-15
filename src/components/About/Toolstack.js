import React from "react";
import { Row, Col } from "react-bootstrap";

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

    {
      icon: <SiVisualstudiocode />,
      name: "VS Code",
    },

    {
      icon: <SiDocker />,
      name: "Docker",
    },

    {
      icon: <SiPostman />,
      name: "Postman",
    },

    {
      icon: <SiApachemaven />,
      name: "Maven",
    },

    {
      icon: <SiIntellijidea />,
      name: "IntelliJ IDEA",
    },

    {
      icon: <SiGithub />,
      name: "GitHub",
    },

    {
      icon: <SiTrello />,
      name: "Trello",
    },

  ];

  return (

    <div className="toolstack-wrapper">

      <Row className="justify-content-center">

        {tools.map((tool, index) => (

          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="mb-4"
          >

            <div
              className="tool-card"
              title={tool.name}
            >

              {/* ICON */}
              <div className="tool-icon">

                {tool.icon}

              </div>

              {/* NAME */}
              <p className="tool-name">

                {tool.name}

              </p>

            </div>

          </Col>

        ))}

      </Row>

    </div>

  );
}

export default Toolstack;