import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dietsystem from "../../Assets/Projects/dietsystem.png";
import daresni from "../../Assets/Projects/daresni.png";
import swapbook from "../../Assets/Projects/swapbook.jpg";
import sv from "../../Assets/Projects/sv.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={dietsystem}
              isBlog={false}
              title="Diest System"
              description="Recipe Recommendation and Nutrition Platform, an AI-driven platform that suggests personalized recipes based on ingredients, nutritional content, and user preferences. It predicts recipe healthiness, provides daily caloric and nutritional plans, and recommends meals tailored to individual health goals."
              ghLink="https://github.com/Sidel-malek/diet_system_"
              /*demoLink="https://plant49-ai.herokuapp.com/"*/
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={daresni}
              isBlog={false}
              title="Daresni"
              description="An online tutoring platform facilitating real-time interactions between teachers and students. The project is built on a 7-microservices architecture, with the backend developed using Spring Boot and NestJS, leveraging a REST API and Kafka for inter-service communication. The frontend is implemented with NextJS/TypeScript, and data management is handled by MongoDB."
              ghLink="https://github.com/marwa-nassane0052/daresni-backend-2"
              /*demoLink="https://editor.soumya-jit.tech/"    */          
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={sv}
              isBlog={false}
              title="Student Valley"
              description='A platform dedicated to managing projects under the initiative " One Degree - One Startup / One Degree - One Patent," in compliance with Ministerial Resolution 1275. Developed using React/TypeScript and Django/Python, it incorporates a REST API. The platform enables students to manage their projects interactively and securely.'
              ghLink=""
             /* demoLink="https://blogs.soumya-jit.tech/"*/
            />
          </Col>


          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={swapbook}
              isBlog={false}
              title="Swapbook"
              description="A mobile application (location-specific) for sharing, exchanging, buying, selling, or donating used books with people nearby, using native Android development (Java) and Firebase as backend services."
              ghLink=""
             /* demoLink="https://chatify-49.web.app/"*/
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
