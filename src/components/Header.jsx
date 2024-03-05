import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/netflixlogo.png'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate()
    const handleNavigatehome=()=>{
      navigate('/')
    }
  const handleNavigatetv=()=>{
    navigate('/tv')
  }
  const handleNavigatemovie=()=>{
    navigate('/movies')
  }
  const handleNavigatecat=()=>{
    navigate('/categories')
  }
  return (
    
    <>
    <Navbar expand="lg"  id='topnav'>
      <Container fluid>
        <Navbar.Brand href="#" className='text-light '>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-around'>
          <Nav
            className="my-2 my-lg-0 allnav"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link id='nvlink1' onClick={handleNavigatehome}>Home</Nav.Link>
            <Nav.Link id='nvlink2'  onClick={handleNavigatemovie}>Movies</Nav.Link>
            <Nav.Link id='nvlink3' onClick={handleNavigatetv}>TV</Nav.Link>
            <Nav.Link href="#action2" id='nvlink4' onClick={handleNavigatecat}>Genres</Nav.Link>
          
          </Nav>
          {/* <Form id="frm">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" bg-body-dark"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <div className='d-flex justify-content-around align-items-center'>
          <i className="fa-regular fa-bell fa-xl ms-5 me-3" style={{color: "#f9fafb"}}></i>
          <i className="fa-regular fa-circle-user fa-xl ms-4" style={{color: "#f5f9ff"}}></i>
          </div>
          {/* <div className='d-flex justify-content-around align-items-center'>
            <button className="btn btn-outline-light me-3">Log in</button>
            <button className="btn btn-outline-light">Sign up</button>
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header