import { Button } from 'react-bootstrap';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { css } from '@emotion/css'




        
        const NavigationBar = () => {
          return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Hem</a>
  </div>
  <div class="container">
  <Button variant="outline-primary" onClick={() => window.open('https://www.harrypotter.com/harry-potter-fan-club', '_blank')}>
              Harry Potter fanpage
            </Button>  </div>
</nav>
        //     <Navbar bg="light" expand="lg">
        //       <Container>
        //         <Navbar.Brand href="/">Min Sida</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //           <Nav className="me-auto">
        //     <Nav.Link href="/">Hem</Nav.Link>
        //     <Button variant="outline-primary" onClick={() => window.open('https://www.harrypotter.com/harry-potter-fan-club', '_blank')}>
        //       Länk
        //     </Button>
        //   </Nav>
        //         </Navbar.Collapse>
        //       </Container>
        //     </Navbar>
          );
        };
        
        export default NavigationBar;

