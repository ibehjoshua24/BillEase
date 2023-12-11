import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'


const NavBar = () => {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark" id='nav'>
        <Container>
          <Navbar.Brand id='logo' href="#home">BillEase.</Navbar.Brand>
          <Nav className="me-auto" id='lists' >
            <Nav.Link id='list' href="#home">Home</Nav.Link>
            <Nav.Link id='list' href="#About">About</Nav.Link>
            <Nav.Link id='list' href="#service">Service</Nav.Link>
            <Nav.Link id='list' href="#contact">Contact</Nav.Link>
          </Nav>
          <div className='btn'>
                <a href="/Login"><button id='btn1'>Login</button></a>
                <a href="/SignUp"><button id='btn2'>Sign Up</button></a>
          </div>
        </Container>
      
      </Navbar>
    </div>
  )
}

export default NavBar