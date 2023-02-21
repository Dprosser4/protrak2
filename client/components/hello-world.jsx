import React, { useState } from 'react';
import { Form, Button, Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(`Email: ${email}, Password: ${password}`);
    // You can add your own logic for handling login here
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Protrak2</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Login</Nav.Link>
              <Nav.Link href="#pricing">Demo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Userame:</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter username"
                value={email}
                onChange={handleEmailChange}
                required
              />
              </Form.Group>

              <Form.Group className='mb-3' controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div></div>
  );
}

export default LoginPage;
