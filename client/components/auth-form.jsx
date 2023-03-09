import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function AuthForm({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        }
      });
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
                required
              />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
                type="password"
                placeholder="Password"
                value={password}
              onChange={(e) => setPassword(e.target.value)}
                required
              />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button className='ms-1 mb-1 float-end' variant="primary" onClick={demoAdmin}>
          Demo Admin
        </Button>
        <Button className=' float-end' variant="primary" onClick={demoTech}>
          Demo Technician
        </Button>
      </Form>
    </div>
  );
}
