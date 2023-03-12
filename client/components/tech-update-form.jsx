import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TechUpdateForm({ project, onSave, onCancel }) {
  const poNumber = project.poNumber;
  const name = project.name;
  const address = project.address;
  const city = project.city;
  const state = project.state;
  const zipcode = project.zipcode;
  const [notes, setNotes] = useState(project.notes);
  const [completed, setCompleted] = useState(project.completed);
  let assignedTo = project.assignedTo;

  /*   async function imageUpload() {
    const { url } = await fetch('/s3Url').then((res) => res.json());
    console.log(url);
  } */

  function handleSubmit(event) {
    event.preventDefault();
    if (completed) {
      assignedTo = null;
    }
    const req = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ poNumber, name, address, city, state, zipcode, notes, completed, assignedTo })
    };
    fetch(`/api/projects/${project.projectId}`, req)

      .then((res) => res.json())
      .then((res) => {
        onSave();
        return res;
      })
      .catch((error) => { console.error('Error:', error); });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <p>PO Number: {project.poNumber}</p>
        <p>Address: {project.address}</p>
        <p>City: {project.city}</p>
        <p>State: {project.state}</p>
        <p>Zipcode: {project.zipcode}</p>
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
        {/*        <Button onClick={imageUpload} variant='primary'>Upload Images</Button> */}
        <Form.Group className='mb-3' controlId="formCompleted">
          <Form.Label>Completed:</Form.Label>
          <Form.Check
            type='checkbox'
            checked={completed}
            onChange={(e) => setCompleted(!completed)}
          />
        </Form.Group>

        <Button variant="primary" type='submit'>
          Update
        </Button>
        <Button onClick={onCancel} className='ms-2' variant='danger'>Cancel</Button>
      </Form>
    </div>
  );
}
