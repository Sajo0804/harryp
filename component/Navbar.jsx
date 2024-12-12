import { Button } from 'react-bootstrap';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { css } from '@emotion/css'




        
        const NavigationBar = () => {
          return (
            <nav className={css`display:grid; padding:50px 50px 50px 50px; gap:10px`}>
  <div >
    <a className={css`color: black; `} href="#">Hem</a>
  </div>
  <div >
  <Button variant="outline-primary" onClick={() => window.open('https://www.harrypotter.com/harry-potter-fan-club', '_blank')}>
              Harry Potter fanpage
            </Button>  </div>
</nav>

          );
        };
        
        export default NavigationBar;


