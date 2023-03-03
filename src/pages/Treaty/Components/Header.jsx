// import React from "react";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import IMAGES from "../../../assets/images";

function Header() {
  return (
    <Container className="px-0">

      <Navbar className="py-0" bg="white" expand="lg">

        <Navbar.Brand className="logoText d-flex justify-content-start align-self-center" href="#home">
          <img className="w-50" src={IMAGES.TREATY_LOGO} alt="" /> treaty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto fs-5 pr-4 pt-1 mr-5 text-nowrap">
            <Nav.Link className="navlink pt-4 mr-3 active" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navlink pt-4 mr-3" href="#features">
              Features
            </Nav.Link>
            <Nav.Link className="navlink pt-4 mr-3" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="navlink pt-4" href="#contact">
              Contact us
            </Nav.Link>
          </Nav>
          <Button className="text-nowrap bg-white shadow-none login-btn px-4 py-2 rounded-pill">
            Login / Register
          </Button>
         
        </Navbar.Collapse>
        

      </Navbar>
      
      
    </Container>
  );
}

export default Header;
