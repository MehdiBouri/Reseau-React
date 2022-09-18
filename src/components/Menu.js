import React from "react";
import {
  Form,
  Nav,
  Navbar,
  Container,
  Button,
  InputGroup,
} from "react-bootstrap";

export default function BasicExample() {
  return (
    <Navbar expand="sm" className="navbar-dark">
      <Container>
        <Navbar.Brand href="#home">JOKE'ME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Form className="mx-3">
              <InputGroup size="sm">
                <Form.Control
                  placeholder="Rechercher..."
                  aria-describedby="basic-addon2"
                />
                <Button className="btn btn-primary" id="button-addon2">
                  OK
                </Button>
              </InputGroup>
            </Form>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex">
          <Nav.Link href="/login">Se connecter</Nav.Link>
          <span className="separator"> | </span>
          <Nav.Link href="/register">S'inscrire</Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}
