import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>

        <div className="about-glass-card">

          <Row className="align-items-center">

            {/* LEFT SIDE */}
            <Col
              lg={8}
              className="home-about-description"
            >

              <p className="section-label">
                LET ME INTRODUCE MYSELF
              </p>

              <h1 className="about-title">
                Building intelligent systems
                and scalable web platforms.
              </h1>

              <p className="home-about-body">

                I am a Computer Science Engineer specialized in{" "}
                <span className="purple">
                  Full-Stack Development
                </span>{" "}
                and{" "}
                <span className="purple">
                  Artificial Intelligence
                </span>.

                <br /><br />

                My work focuses on designing modern web
                applications, distributed systems,
                and AI-powered platforms using scalable
                backend architectures and machine learning.

                <br /><br />

                I enjoy building intelligent systems that connect software engineering with real-world AI applications 🚀

 
              

                <br /><br />

                Main technologies:
              </p>

              {/* TECH STACK */}
              <div className="tech-stack">

                <span>Django</span>
                <span>Next.js</span>
                <span>Spring Boot</span>
                <span>Kafka</span>
                <span>React</span>
                <span>Machine Learning</span>
                <span>Microservices</span>

              </div>

            </Col>

            {/* RIGHT SIDE */}
            <Col
              lg={4}
              className="about-right-side"
            >

              <div className="stats-card">

                <div className="stat-item">
                  <h2>5+</h2>
                  <p>Projects Built</p>
                </div>

                <div className="stat-item">
                  <h2>AI</h2>
                  <p>Machine Learning Systems</p>
                </div>

                <div className="stat-item">
                  <h2>Full-Stack</h2>
                  <p>Modern Web Development</p>
                </div>

              </div>

            </Col>

          </Row>

        </div>
      </Container>
    </Container>
  );
}

export default Home2;