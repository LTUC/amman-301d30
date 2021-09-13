import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand href="#home">🐈 Cat Owners 🐱</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default Header
