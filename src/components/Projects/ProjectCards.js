import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view hover-card">
      {/* Image */}
      <div className="project-image-wrapper">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          className="project-image"
        />

        {/* Status Badge */}
        {props.status && (
          <span className="project-status">
            {props.status}
          </span>
        )}
      </div>

      <Card.Body className="project-body">
        {/* Title */}
        <Card.Title className="project-title">
          {props.title}
        </Card.Title>

        {/* Short Summary */}
        <p className="project-summary">
          {props.summary || props.description}
        </p>

        {/* Features */}
        {props.features && (
          <div className="project-section">
            <h6 className="section-title">
              <FiLayers style={{ marginRight: "6px" }} />
              Features
            </h6>

            <ul className="project-list">
              {props.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Contributions */}
        {props.contributions && (
          <div className="project-section">
            <h6 className="section-title">
              My Contributions
            </h6>

            <ul className="project-list">
              {props.contributions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {props.tech && (
          <div className="tech-container">
            {props.tech.map((tech, index) => (
              <span className="tech-badge" key={index}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="project-buttons">
          {/* GitHub */}
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="project-btn"
          >
            <BsGithub />
            &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* Demo */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-btn"
            >
              <CgWebsite />
              &nbsp;
              Demo
            </Button>
          )}

          {/* View Project */}
          {props.viewLink && (
            <Button
              variant="success"
              href={props.viewLink}
              target="_blank"
              className="project-btn secondary-btn"
            >
              View Project
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;