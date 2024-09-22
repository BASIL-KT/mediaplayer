import React from 'react'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
     <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-brands fa-square-youtube fa-beat-fade fa-xl" style={{color: "#0756df",}} />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header