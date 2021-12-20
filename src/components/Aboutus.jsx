import React from "react";
import { Card, ListGroupItem, Row, Col} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Github, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import Vivek from "../assets/vivek.jpg";
import Charles from "../assets/charles.jpg";
import Tim from "../assets/tim.jpg";

function Aboutus() {
  return (
    <div className= "about-us-container d-flex align-items-center justify-content-center mt-5">
      <Card  border="primary" style={{ maxWidth: '20rem' }}>
        <Card.Img variant="top" src={Vivek} />
        <Card.Body>
          <Card.Title>Vivek Thakore</Card.Title>
          <Card.Text>Web Developer</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <a
              href="mailto: vivek.thakore08@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EnvelopeFill size={40} className="p-1" />
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="https://github.com/vivekthak88">
              <Github size={40} className="p-1" />
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="https://www.linkedin.com/in/vivekthakore">
              <Linkedin size={36} className="p-1" />
            </a>
          </ListGroupItem>
        </ListGroup>
      </Card>

      <Card border="primary" style={{ maxWidth: '20rem' }}>
        <Card.Img variant="top" src={Charles} />
        <Card.Body>
          <Card.Title>Charles Eldrigde</Card.Title>
          <Card.Text>Web Developer</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <a
              href="mailto: eldridge.crow@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EnvelopeFill size={40} className="p-1" />
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="https://github.com/Eldridge0831">
              <Github size={40} className="p-1" />
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="https://www.linkedin.com/in/vivekthakore">
              <Linkedin size={36} className="p-1" />
            </a>
          </ListGroupItem>
        </ListGroup>
      </Card>

      <Card border="primary" style={{ maxWidth: '20rem' }}>
        <Card.Img variant="top" src={Tim} />
        <Card.Body>
          <Card.Title>Tim Johns</Card.Title>
          <Card.Text>Web Developer</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <a
              href="mailto: tjohns823@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EnvelopeFill size={40} className="p-1" />
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="https://github.com/tjohns823">
              <Github size={40} className="p-1" />
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href=" https://www.linkedin.com/in/timothy-johns-jr/">
              <Linkedin size={36} className="p-1" />
            </a>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Aboutus;
