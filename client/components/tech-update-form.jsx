import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Modal, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScaleLoader } from 'react-spinners';

export default function TechUpdateForm({ project, onSave, onCancel }) {
  const projectId = project.projectId;
  const poNumber = project.poNumber;
  const name = project.name;
  const address = project.address;
  const city = project.city;
  const state = project.state;
  const zipcode = project.zipcode;
  const [notes, setNotes] = useState(project.notes);
  const [completed, setCompleted] = useState(project.completed);
  const [projectImages, setProjectImages] = useState([]);
  const fileInput = useRef();
  const [isLoading, setIsLoading] = useState(true);
  let assignedTo = project.assignedTo;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(`/api/images/${projectId}`)
      .then((response) => response.json())
      .then((data) => setProjectImages(data))
      .catch((error) => { console.error('Error:', error); });
  }, [projectId]);

  function getFileList(event) {
    event.preventDefault();
    setIsLoading(false);
    const newArr = fileInput.current.files;
    for (let i = 0; i < newArr.length; i++) {
      imageUpload(newArr[i]);
    }
    fileInput.current.value = null;
  }

  /* console.log(projectImages); */

  async function imageUpload(file) {
    const { url } = await fetch('/s3Url').then((res) => res.json());

    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: file
    });

    const imageUrl = url.split('?')[0];

    const newImage = {
      project: projectId,
      url: imageUrl
    };

    const newImages = projectImages.concat(newImage);

    setProjectImages(newImages);
    setIsLoading(true);
    /*   console.log(newImages); */

    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imageUrl, projectId })
    };
    await fetch('/api/images', req)
      .then((res) => res.json())
      .catch((error) => { console.error('Error:', error); });

  }

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

        <Button variant="primary" onClick={handleShow}>
          Add/View Images
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Images</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form >

              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Upload Multiple Image Files</Form.Label>
                <Form.Control
                type="file"
                multiple accept="image/*"
                ref={fileInput}
                 />
              </Form.Group>
              <Button variant="primary" onClick={getFileList}>
                {isLoading ? 'Add Images' : <ScaleLoader color="#FFFFFF" /> }
              </Button>
              <Button variant="secondary" className='float-end' onClick={handleClose}>
                Close
              </Button>
            </Form>
            <h2 className="fs-4 mt-3 text-center">
              Gallery:
            </h2>
            {projectImages.length === 0 &&
              <p className='text-center'>There are no images uploaded yet.</p>
            }
            {projectImages.map((image, index) => (
              <Image fluid className='my-2' rounded key={index} src={image.url} />
            ))}
          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

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
