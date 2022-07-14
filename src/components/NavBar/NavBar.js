
import "./NavBar.css";
import NavegacionLink from "../NavegacionLink/NavegacionLink.js";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/logo.png';
import CartWidget  from "../CartWidget/CartWidget";
export default function navbar(){
    return (
        <>
        <Navbar bg="light" variant="light">
          <Container className="contenedor">
            <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo"/></Navbar.Brand>
            <Nav className="me-auto">
             
              <NavegacionLink link="/productos" title="Productos"/>
              <NavegacionLink link="/nosotros" title="Nosotros"/>
              <NavegacionLink link="/contacto" title="Contacto" />
            </Nav>
          <CartWidget link="carrito#"/>
          </Container>
        </Navbar>
      </>
    );
  }
  

