import React, { useState, useRef } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScaleLoader } from 'react-spinners';
import ProjectImages from './project-images';

export default function ImageModal({ projectImages, project, show, handleClose }) {
  const projectId = project.projectId;
  const [newImages, setNewImages] = useState([]);
  const fileInput = useRef();
  const [isLoading, setIsLoading] = useState(true);

  function getFileList(event) {
    event.preventDefault();
    const newArr = fileInput.current.files;
    if (newArr.length !== 0) {
      setIsLoading(false);
    }
    for (let i = 0; i < newArr.length; i++) {
      imageUpload(newArr[i]);
    }
    fileInput.current.value = null;
  }

  async function imageUpload(file) {
    const { url } = await fetch('/s3Url').then((res) => res.json());
    const imageUrl = url.split('?')[0];

    const newImage = {
      project: projectId,
      url: imageUrl
    };

    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: file
    });
    setNewImages((newImages) => [...newImages, newImage]);
    setIsLoading(true);

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

  return (
    <Modal show={show} onHide={handleClose}>
      <>
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
              {isLoading ? 'Add Images' : <ScaleLoader color="#FFFFFF" />}
            </Button>
            <Button variant="secondary" className='float-end' onClick={handleClose}>
              Close
            </Button>
          </Form>
          <h2 className="fs-4 mt-3 text-center">
            Gallery:
          </h2>
          {isLoading
            ? <ProjectImages projectId={projectId} newImages={newImages} projectImages={projectImages} />
            : < ScaleLoader color="#136EFD" />
          }

        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </>

    </Modal>

  );
}
