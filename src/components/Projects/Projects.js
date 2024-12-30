import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/chatify.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Messaging bridge"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with awt tools, Material-UI, and Socket programming. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://gitlab.com/sahil-bijlani/messagingbridge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pen It blog"
              description="Pen It Blog is a dynamic and user-friendly blogging platform built using the Laravel framework. Designed to cater to writers, readers, and enthusiasts, this project provides a seamless interface for creating, managing, and reading blog content."
              ghLink="https://gitlab.com/sahil-bijlani/blog-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Scratch pad"
              description="The Notepad Clone project is a lightweight, feature-rich text editor inspired by the simplicity and functionality of the classic Windows Notepad application. Built with modern web technologies and frameworks, this project serves as a reliable tool for creating, editing, and managing text files."
              ghLink="https://gitlab.com/sahil-bijlani/scratch-pad"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Film fiesta"
              description="Film Fiesta is a modern web application built with React, designed to provide users with a seamless platform for discovering, browsing, and reviewing movies. Whether you're a movie enthusiast looking for the latest releases, classics, or top-rated films, Film Fiesta offers a rich and engaging experience."
              ghLink="https://gitlab.com/react8033147/film-fiesta"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Real estate"
              description="Real Estate Manager is a powerful, feature-rich web application built on the Laravel framework, designed to streamline the management and showcasing of real estate properties. This application caters to real estate agencies, property owners, and potential buyers or renters by providing a user-friendly platform."
              ghLink="https://gitlab.com/Shraddha-Keniya/real-estate-2024"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tasker"
              description="Tasker is an efficient and intuitive task management application designed to help individuals and teams organize, track, and accomplish their tasks effortlessly. Built with modern web technologies, Tasker combines functionality and simplicity, making it an ideal solution for personal productivity"
              ghLink="https://gitlab.com/react8033147/tasker-using-reducer"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
