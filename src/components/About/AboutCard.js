import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sid El Mrabet Malek Aya </span>
            from <span className="purple"> Sidi Bel Abbes, Algeria.</span>
            <br />
            I am currently a 5th-year engineering student at ESI-SBA, specializing in Information Systems and Web Development.
            with a strong passion for data analysis and machine learning.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sid El Mrabet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
