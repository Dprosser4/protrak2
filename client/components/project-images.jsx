import React from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProjectImages({ projectId, newImages, projectImages }) {

  return (
    <>
      {(projectImages.length === 0 && newImages.length === 0) &&
      <p className='text-center'>There are no images uploaded yet.</p>
       }
      {newImages.map((image, index) => (
        <Image fluid className='my-2' rounded key={index} src={image.url} />
      ))}
      {projectImages.map((image, index) => (
        <Image fluid className='my-2' rounded key={index} src={image.url} />
      ))}
    </>
  );
}
