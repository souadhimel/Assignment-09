import React from "react";
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Container,
} from "react-bootstrap";

import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="success">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <h1 className="text">Online Tutorial</h1>
          <Nav
            className="ms-auto mx-10 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
