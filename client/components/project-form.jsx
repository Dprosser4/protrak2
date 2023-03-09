import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProjectForm() {
  const [poNumber, setPoNumber] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  function handleReset() {
    setPoNumber('');
    setName('');
    setAddress('');
    setCity('');
    setState('');
    setZipcode('');
    setNotes('');
    setError(false);
  }

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  function handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ poNumber, name, address, city, state, zipcode, notes })
    };
    fetch('/api/projects', req)

      .then((res) => res.json())
      .then((res) => {
        if (res.error === 'duplicate') {
          setError(true);
        } else {
          setShowAlert(true);
          handleReset();
          return res;
        }
      })
      .catch((error) => { console.error('Error:', error); });
  }

  return (
    <div>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Project Created
        </Alert>
      )}
      <p className='fs-6 text-left'>Required*</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId="formPoNumber">
          <Form.Label>PO Number:*</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter PO Number e.g. PT12345"
              value={poNumber}
              onChange={(e) => setPoNumber(e.target.value)}
              isInvalid = {!!error}
              required
            />
          <Form.Control.Feedback type="invalid">
            PO Number already exists! Try Another
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' controlId="formName">
          <Form.Label>Name:*</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
        </Form.Group>
        <Form.Group className='mb-3' controlId="formAddress">
          <Form.Label>Address:*</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
        </Form.Group>
        <Form.Group className='mb-3' controlId="formCity">
          <Form.Label>City:*</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
        </Form.Group>
        <Form.Group className='mb-3' controlId="formState">
          <Form.Label>State:*</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
        </Form.Group>
        <Form.Group className='mb-3' controlId="formZipcode">
          <Form.Label>Zipcode:*</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter Zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
            />
        </Form.Group>
        <Form.Group className='mb-3' controlId="formNotes">
          <Form.Label>Notes:</Form.Label>
          <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
