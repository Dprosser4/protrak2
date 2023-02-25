import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function AuthForm({ action, onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    };
    fetch(`/api/auth/${action}`, req)
      .then((res) => res.json())
      .then((result) => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (result.user && result.token) {
          onSignIn(result);
        }
      });
  }

  const submitButtonText = action === 'sign-up'
    ? 'Register'
    : 'Log In';

  return (
    <div>
      <div className="">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Userame:</Form.Label>
            <Form.Control
                type="text"
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
            {submitButtonText}
          </Button>
        </Form>
      </div>
    </div>
  );
}
