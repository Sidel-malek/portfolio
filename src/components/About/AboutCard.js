import React from "react";
import Card from "react-bootstrap/Card";

import {
  AiOutlineRobot,
  AiOutlineCluster,
  AiOutlineApi,
  AiOutlineExperiment,
} from "react-icons/ai";

function AboutCard() {
   const interests = [
    {
      icon: "⚙️",
      title: "Backend Engineering",
      desc: "Building robust, scalable server architectures with Django, FastAPI, and microservices patterns.",
    },
    {
      icon: "🧠",
      title: "Artificial Intelligence",
      desc: "ML, Deep Learning, and Explainable AI — turning models into production-grade intelligent systems.",
    },
    {
      icon: "🌐",
      title: "Distributed Systems",
      desc: "Designing fault-tolerant microservices, event-driven pipelines, and cloud-native infrastructures.",
    },
    {
      icon: "🏥",
      title: "Healthcare AI",
      desc: "Multimodal ML for medical decision-support — where AI precision meets real human impact.",
    },
  ];
 
  const stats = [
    { value: "3", suffix: "+", label: "Years Building" },
    { value: "10", suffix: "+", label: "Projects Shipped" },
    { value: "5", suffix: "+", label: "AI Models Integrated" },
  ];
 
  const goals = [
    "Architect large-scale AI-powered platforms",
    "Bridge software engineering and clinical AI",
    "Contribute to open-source distributed systems",
    "Lead intelligent healthcare decision tools",
  ];

  return (

    <Card className="quote-card-view about-modern-card">

      <Card.Body>

        <div className="about-content">

          {/* LABEL */}
          <p className="about-small-title">
            KNOW WHO I'M
          </p>

          {/* TITLE */}
          <h2 className="about-main-heading">

            Full-Stack Developer &
            AI Engineer building scalable
            intelligent systems.

          </h2>

          {/* DESCRIPTION */}
          <p className="about-description">

            Hi, I am{" "}
            <span className="purple">
              Sid El Mrabet Malek Aya
            </span>,
            a Computer Science Engineer based in{" "}
            <span className="purple">
              Sidi Bel Abbes, Algeria
            </span>.

            <br />
            <br />

            I specialize in{" "}
            <span className="purple">
              Full-Stack Development
            </span>{" "}
            and{" "}
            <span className="purple">
              Artificial Intelligence
            </span>,
            with experience designing scalable web
            platforms and integrating machine learning
            into real-world applications.

            <br />
            <br />

            I developed a{" "}
            <span className="purple">
              medical AI decision-support web platform
            </span>{" "}
            integrating multimodal machine learning models
            and Explainable AI techniques, alongside
            distributed microservices-based systems and
            academic collaboration platforms.

            <br />
            <br />

            Currently, I am particularly interested in
            building intelligent systems that combine
            backend engineering with applied AI in
            healthcare and decision-support environments.

          </p>

          {/* INTERESTS */}
          <div className="about-expertise-grid">

            <div className="about-expertise-card">

              <div className="about-icon">
                <AiOutlineExperiment />
              </div>

              <h3>
                Machine Learning
              </h3>

              <p>
                Deep Learning, multimodal architectures,
                intelligent AI systems.
              </p>

            </div>

            <div className="about-expertise-card">

              <div className="about-icon">
                <AiOutlineRobot />
              </div>

              <h3>
                Medical AI
              </h3>

              <p>
                AI-powered healthcare systems
                and decision-support platforms.
              </p>

            </div>

            <div className="about-expertise-card">

              <div className="about-icon">
                <AiOutlineCluster />
              </div>

              <h3>
                Distributed Systems
              </h3>

              <p>
                Microservices architecture,
                scalable infrastructures,
                asynchronous systems.
              </p>

            </div>

            <div className="about-expertise-card">

              <div className="about-icon">
                <AiOutlineApi />
              </div>

              <h3>
                Backend Engineering
              </h3>

              <p>
                Django platforms,
                scalable APIs,
                modern backend architectures.
              </p>

            </div>

          </div>

          {/* QUOTE */}
          <div className="about-quote">

            <p>
              “Building intelligent systems that connect
              software engineering with real-world AI applications.”
            </p>

            <span>
              — Sid El Mrabet Malek Aya
            </span>

          </div>

        </div>

      </Card.Body>

    </Card>

  );
}

export default AboutCard;