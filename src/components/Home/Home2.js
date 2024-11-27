import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/girl.webp";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
              I’ve always been passionate about coding, and with every project,
              I keep learning and growing as a developer. 🤓
              <br />
              <br />I am fluent in technologies like
              <i>
                <b className="purple"> ReactJS, ReactNative</b></i> &nbsp;and <i>
                <b className="purple">Javascript. </b>
              </i>
              <br />
              <br />
              I’m focused on building innovative web products with modern
              JavaScript frameworks like <i>
              <b className="purple">React.js,</b></i><i>
              <b className="purple"> Next.js</b></i> &nbsp;and <i>
              <b className="purple">Node.js</b></i>.
              <br />
              <br />
              I’m always excited to create{" "}
              <i>
                <b className="purple">user-centric applications</b>
              </i>
              &nbsp; that make an impact!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/arshkaur9091"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arsh-kaur-pahwa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
