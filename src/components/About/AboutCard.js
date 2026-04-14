import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Sid El Mrabet Malek Aya</span>, a
            Computer Science Engineer based in{" "}
            <span className="purple">Sidi Bel Abbes, Algeria.</span>
            <br />
            <br />
            I specialize in{" "}
            <span className="purple">
              Full-Stack Development and Artificial Intelligence
            </span>
            , with experience designing scalable web platforms and integrating
            machine learning into real-world applications.
            <br />
            <br />
            I developed a{" "}
            <span className="purple">
              medical AI decision-support web platform
            </span>{" "}
            integrating multimodal machine learning models and Explainable AI
            techniques, alongside distributed microservices-based systems and
            academic collaboration platforms.
            <br />
            <br />
            Currently, I am particularly interested in building intelligent
            systems that combine backend engineering with applied AI in
            healthcare and decision-support environments.
            <br />
            <br />
            My main interests include:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Machine Learning & Deep Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Medical AI Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Multimodal Learning Architectures
            </li>
            <li className="about-activity">
              <ImPointRight /> Microservices Architecture
            </li>
            <li className="about-activity">
              <ImPointRight /> Django-based Intelligent Platforms
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building intelligent systems that connect software engineering with
            real-world AI applications."
          </p>
          <footer className="blockquote-footer">
            Sid El Mrabet Malek Aya
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;