import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
Hi, I am <span className="purple">Sid El Mrabet Malek Aya</span>, a Computer Science Engineer based in
<span className="purple"> Sidi Bel Abbès, Algeria.</span>

<br /><br />

I specialize in <b className="purple">Full-Stack Development</b> and
<b className="purple"> Artificial Intelligence</b>, with experience designing scalable web platforms and AI-based decision-support systems.

<br /><br />

I developed an <b className="purple">medical AI web platform</b> integrating multimodal machine learning models and Explainable AI techniques, alongside several full-stack applications including tutoring platforms and distributed microservices-based systems.

<br /><br />

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
    <ImPointRight /> Microservices Architecture
  </li>
  <li className="about-activity">
    <ImPointRight /> Backend & Django-based Platforms
  </li>
</ul>

          <p style={{ color: "rgb(155 126 172)" }}>
"Building intelligent systems that connect software engineering with real-world AI applications."
</p>

<footer className="blockquote-footer">Sid El Mrabet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
