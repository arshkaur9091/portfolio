import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Arshdeep Kaur </span>
            from <span className="purple"> Haryana, India.</span>
            <br />
            I am a passionate Open Source Developer with expertise in JavaScript, ReactJS, React Native, and UI development. 
            <br />
            I have completed Bachelor of Engineering (BE) in Computer Science at Chitkara University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
           
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
