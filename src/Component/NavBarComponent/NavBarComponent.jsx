import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Category from '../../pages/Category';
import axios from 'axios';

const NavBarComponent = () => {


  const [categories, setCategories] = useState ([])
  useEffect(() =>{
    axios
      .get ('https://dummyjson.com/products/categories')
      .then((res) =>setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={'/'}>Tienda Nahuel
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Cuenta</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {
                categories.map((Category, index) => {
                  return(
                    <NavDropdown.Item key={index}>   
                      <Link to={ `/Category/${Category} `}>{Category}
                      </Link>
                    </NavDropdown.Item>
                  )

                })
              }
              
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
