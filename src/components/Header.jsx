import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/netflixlogo.png'
function Header() {
  return (
    <>
    <Navbar expand="lg" classNameName="bg-dark" id='topnav'>
      <Container fluid>
        <Navbar.Brand href="#" classNameName='text-light '>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-around'>
          <Nav
            classNameName=" my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" id='nvlink1'>Home</Nav.Link>
            <Nav.Link href="#action2" id='nvlink2'>Movies</Nav.Link>
            <Nav.Link href="#action2" id='nvlink3'>TV Shows</Nav.Link>
            <Nav.Link href="#action2" id='nvlink4'>Genres</Nav.Link>
            
          </Nav>
          <Form id="frm">
            <Form.Control
              type="search"
              placeholder="Search"
              classNameName="me-2 bg-body-dark"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header