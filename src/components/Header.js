import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/CoreLayOutStyle.css';

class Header extends React.Component {
  render() {
    return (
      <div >
        <Navbar bg="dark" variant="dark" id="Header-Layout">
          <Navbar.Brand as={Link} to="/">Restaurant</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/ListRestaurant">ListRestaurant</Nav.Link>
            <Nav.Link as={Link} to="/projects">projects</Nav.Link>
            <Nav.Link as={Link} to="/posts">posts</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header
