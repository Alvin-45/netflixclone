import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './assets/netflixlogo.png'
function Sidenav() {
  return (
    <div>
        <Nav className="navigation">

<ul className="menu">


    <li><br/><i className="fa-brands fa-rebel fa-2xl mt-3" style={{color: "#ffffff"}}></i><br/><br/><br/></li>
    <li><a className="active" href="#">
        <i className="fa-solid fa-house fa-lg mb-5 mt-5 home"></i>
        <span
                title="Home"></span></a></li>
    <li>
        <a href="#">
            <i className="fa-solid fa-magnifying-glass fa-lg mb-5 search"></i><span
                title="About"></span></a></li>
    <li>
        <a href="#">
        <i className="fa-regular fa-circle-user fa-lg mb-5 user"></i><span
                title="Work"></span></a></li>
    <li>
        <a href="#"><i className="fa-solid fa-tv fa-lg mb-5 tv" ></i><span title="Lab"></span></a>
    </li>
    <li>
        <a href="#">
        <i className="fa-solid fa-list categories" ></i><span
                title="Contact"></span></a></li>
</ul>

</Nav>

    </div>
  )
}

export default Sidenav