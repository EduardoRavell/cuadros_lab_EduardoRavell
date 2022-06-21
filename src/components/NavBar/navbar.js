
import "./navbar.css";
import NavLink from "../NavLink/navlink.js";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/logo.png';

export default function navbar(){
    return (
        <>
        <Navbar bg="light" variant="light">
          <Container className="contenedor">
            <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo"/></Navbar.Brand>
            <Nav className="me-auto">
              <NavLink link="#Productos" title="Productos"/>
              <NavLink link="#Nosotros" title="Nosotros"/>
              <NavLink link="#Contacto" title="Contacto" />
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  

