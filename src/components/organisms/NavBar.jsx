import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../../src/styles/organisms/NavBar.css'

function NavBar() {
  return (
    <Navbar expand="lg" className='navbar-custom'>
      <Container>
        <Navbar.Brand href="/">Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/proyects">Proyectos</Nav.Link>
            <Nav.Link href="/news">Noticias</Nav.Link>
            <Nav.Link href="/abouts">Sobre Mí</Nav.Link>
            <Nav.Link href="/contacts">Contactame</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;