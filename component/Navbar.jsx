import { Button } from 'react-bootstrap';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';



        
        const NavigationBar = () => {
          return (
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Min Sida</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
            <Nav.Link href="#home">Hem</Nav.Link>
            <Button variant="outline-primary" onClick={() => window.open('https://www.harrypotter.com/harry-potter-fan-club', '_blank')}>
              Länk
            </Button>
          </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        };
        
        export default NavigationBar;

