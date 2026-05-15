import { Container } from "react-bootstrap";

import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="contact"
    >
      <Container>
        {/* SOCIAL */}
        <div className="social-section">

          <p className="section-label">
            CONNECT
          </p>

          <h2>
            Connect With Me
          </h2>

          <p className="social-text">
            Feel free to reach out through social platforms
          </p>

          <ul className="home-about-social-links">

            <li className="social-icons">
              <a
                href="https://github.com/sidel-malek"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/malek-sidel-mrabet-520909222"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/sidel_malek/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>

          </ul>

        </div>

      </Container>
    </Container>
  );
}

export default Contact;