import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import YouTubePreview from "./YoutubePreview";

function Talks() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Talks </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <YouTubePreview />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Talks;
