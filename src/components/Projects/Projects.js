import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WebsitePreview from "./WebsitePreview";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={7} className="project-card">
            <ProjectCard
              preview={<WebsitePreview url="https://gluestack.io/" />}
              isBlog={false}
              title="gluestack-ui v2"
              description="Built a comprehensive website for gluestack-ui v2, showcasing customizable UI components to enhance developer usability and adoption. The site features responsive design, interactive component previews, theming options, and detailed documentation, streamlining the UI development process for scalable applications."
            />
          </Col>

          <Col md={7} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Figma-to-HTML"
              description="The Figma-to-HTML plugin is a tool that automates the conversion of Figma designs into responsive HTML code in less than a minute. It simplifies the design-to-development workflow by transforming Figma components and layers into clean, semantic HTML, ensuring compatibility with major email clients like Outlook and Gmail. The plugin saves significant time, enhances collaboration between designers and developers, and reduces manual coding efforts. With a focus on cross-platform compatibility and customizable output, this tool is designed to improve productivity and streamline the development process."
            />
          </Col>

          <Col md={7} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Academy Portal"
              description="The Academy Portal is a Learning Management System (LMS) designed to facilitate continuous learning and development within an organization. Built with Laravel, PHP, and MySQL, the platform serves as a centralized hub where employees can access training materials, courses, and resources to enhance their skills and knowledge. The portal provides a user-friendly interface for employees to track their progress, complete courses, and engage with learning content."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
