import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                 I am a Computer Science Engineer specialized in <b className="purple">Full-Stack Development</b> and <b className="purple">Artificial Intelligence</b>, with experience in building scalable web platforms and intelligent decision-support systems.

                 <br /><br />

                 I developed an <b className="purple">AI-based medical decision-support web platform</b> integrating multimodal machine learning models and Explainable AI techniques, alongside several full-stack applications including tutoring platforms, student project management systems, and mobile applications.

                 <br /><br />

                 My technical stack includes <b className="purple">Next.js, Django, Spring Boot, Microservices architecture</b>, and <b className="purple">Machine Learning & Deep Learning</b> using Python frameworks such as PyTorch and Scikit-learn.

                 <br /><br />

                 I enjoy designing end-to-end intelligent applications that combine backend engineering with real-world AI integration.

                 <br /><br />

                 Let’s build something impactful together 🚀
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar " alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sidel-malek"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/malek-sid-el-mrabet-520909222/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
