import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dietsystem from "../../Assets/Projects/dietsystem.png";
import daresni from "../../Assets/Projects/daresni.png";
import swapbook from "../../Assets/Projects/swapbook.jpg";
import sv from "../../Assets/Projects/sv.png";
import neurevia from "../../Assets/Projects/neurevia.PNG";

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
            imgPath={neurevia}
            isBlog={false}
            title="NeurevIA – AI Medical Decision-Support Platform"
            description="AI-based medical decision-support web application integrating multimodal machine learning models (medical imaging and structured clinical data) with Explainable AI techniques (SHAP/LIME). The platform provides an interactive Django-based interface supporting secure patient data input and prediction visualization for clinical assistance."
            ghLink=""
          />
        </Col>    

        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={daresni}
              isBlog={false}
              title="Daresni"
              description="Distributed online tutoring platform built using a 7-microservices architecture with Spring Boot and NestJS. Implemented asynchronous communication via Kafka and REST APIs, with a Next.js frontend and MongoDB-based persistence layer."              ghLink="https://github.com/marwa-nassane0052/daresni-backend-2"
              /*demoLink="https://editor.soumya-jit.tech/"    */          
            />
        </Col>    

        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={sv}
              isBlog={false}
              title="Student Valley"
              description="Full-stack project management platform developed with React/TypeScript and Django REST API, designed to support innovation-oriented academic programs (One Degree – One Startup / One Degree – One Patent). Enables structured tracking of student projects and collaboration workflows."              ghLink=""
             /* demoLink="https://blogs.soumya-jit.tech/"*/
            />
        </Col>

        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={dietsystem}
              isBlog={false}
              title="Diest System"
              description="AI-based nutrition recommendation platform that predicts recipe healthiness and generates personalized meal plans using ingredient-level analysis and nutritional scoring models."
              ghLink="https://github.com/Sidel-malek/diet_system_"
              /*demoLink="https://plant49-ai.herokuapp.com/"*/
            />
          </Col>        


          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={swapbook}
              isBlog={false}
              title="Swapbook"
              description="Location-based Android application for exchanging and donating used books, developed in Java with Firebase backend services supporting authentication, real-time database synchronization, and geolocation features."
             /* demoLink="https://chatify-49.web.app/"*/
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
