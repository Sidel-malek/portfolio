import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import homeLogo from "../../Assets/about.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Contact from "./Contact"
import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <section className="home-section">
      <Container fluid  id="home">
        <Particle />

        <Container className="home-content">
          <Row className="align-items-center">

            {/* LEFT SIDE */}
            <Col md={7} className="home-header">

              <div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >

                <p className="hero-greeting">
                  Full-Stack Developer & AI Engineer
                </p>

                <h1 className="hero-title">
                 SID EL MRABET <br/>
                 Malek Aya
                </h1>

                <p className="hero-description">
                  I build scalable web platforms, distributed systems,
                  and intelligent AI-powered applications using modern
                  full-stack technologies and machine learning.
                </p>

                {/* CTA BUTTONS */}
                <div className="hero-buttons">

                  <Link
                    to="/project"
                    className="hero-btn primary-btn"
                  >
                    View Projects
                  </Link>
                  
                  <HashLink smooth to="/#contact"  className="hero-btn secondary-btn">
                    Contact Me
                  </HashLink>
                

                </div>

              </div>

            </Col>

            {/* RIGHT SIDE */}
            <Col md={5} className="hero-image-container">

              <img
                src={homeLogo}
                alt="hero"
                className="img-fluid hero-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />

            </Col>

          </Row>
        </Container>
      </Container>

      <Home2 />
      <Contact/>
    </section>
  );
}

export default Home;