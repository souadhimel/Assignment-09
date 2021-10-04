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
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <h3 className="text">Online Tutorial</h3>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Type your service"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
