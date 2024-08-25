import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import img from '../images/logo.png'; // Adjust the path based on your file structure

const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={img}
          alt="TaskSpense Logo"
          style={{ marginLeft: '50px', height: '50px' , weight: '50px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/tasks">
            <Button
              variant={location.pathname === '/tasks' ? 'primary' : 'outline-light'}
              className="mx-1"
            >
              Tasks
            </Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/expenses">
            <Button
              variant={location.pathname === '/expenses' ? 'primary' : 'outline-light'}
              className="mx-1"
            >
              Expenses
            </Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <Button
              variant={location.pathname === '/login' ? 'primary' : 'outline-light'}
              className="mx-1"
            >
              Login
            </Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            <Button
              variant={location.pathname === '/register' ? 'primary' : 'outline-light'}
              className="mx-1"
            >
              Register
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
