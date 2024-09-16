import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
   <>
   

   <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home"   style={{color: "#fff",}}>
          <i className="fa-solid fa-film fa-xl" style={{color: "#74C0FC",}} />
                     
           MOVIEDB
          </Navbar.Brand>
        </Container>
      </Navbar>
   </>
  )
}

export default Header
