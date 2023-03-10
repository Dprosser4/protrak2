import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ScaleLoader } from 'react-spinners';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function AuthForm({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function demoAdmin(event) {
    setUsername('admin1');
    setPassword('admin1');
  }

  function demoTech(event) {
    setUsername('tech1');
    setPassword('tech1');
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    };
    fetch('/api/auth/sign-in', req)
      .then((res) => res.json())
      .then((result) => {
        if (result.user && result.token) {
          onSignIn(result);
        } else {
          setIsLoading(false);
          setError(true);
        }
      })
      .catch((error) => { console.error('Error:', error); });
  }

  if (isLoading) {
    return (<div className='d-flex mt-5 justify-content-center'>
      <ScaleLoader color="#136EFD" />
    </div>);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Userame:</Form.Label>
          <Form.Control
                type="text"
            value={username}
                placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            isInvalid={!!error}
                required
              />
          <Form.Control.Feedback type="invalid">
            Incorrect Username or Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
                type="password"
                placeholder="Password"
                value={password}
              onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!error}
                required
              />
        </Form.Group>
        <Button className='me-2 mb-2' variant="primary" type="submit">
          Login
        </Button>

        <Button className='me-2 mb-2' variant="primary" onClick={demoTech}>
          Demo Technician
        </Button>
        <Button className='me-2 mb-2' variant="primary" onClick={demoAdmin}>
          Demo Admin
        </Button>

      </Form>
    </div>
  );
}
