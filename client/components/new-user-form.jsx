import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewUserForm({ action, onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('tech');

  function handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, firstName, lastName, role })
    };
    fetch('/api/auth/sign-up', req)
      .then((res) => res.json())
      .then((result) => {
        window.location.hash = 'manageusers';
      });
  }

  return (
    <>
      <div className='text-center'>
        <h2 className="fs-4">
          Add User Logins
        </h2>
      </div>
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

        <Form.Group className='mb-3' controlId="formPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formCompleted">
          <Form.Label>Role</Form.Label>

          <Form.Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
            <option value="tech">Technician</option>
            <option value="admin">Administrator</option>
          </Form.Select>

        </Form.Group>

        <Button variant="primary" type="submit">
          Create New User
        </Button>

        <Button className='ms-1' variant="danger" href="#manageusers">
          Cancel
        </Button>
      </Form>

    </>
  );
}
