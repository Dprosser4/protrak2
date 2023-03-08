import React, { useContext } from 'react';
import AppContext from '../lib/app-context';
import { Accordion, Button } from 'react-bootstrap';

export default function ProjectsAccordian({ projects, handleUpdateClick }) {

  const { techs } = useContext(AppContext);

  return (
    <Accordion>
      {projects.map((project) => (
        <Accordion.Item key={project.projectId} eventKey={project.projectId}>
          <Accordion.Header>
            <span className='fw-bolder'>{project.poNumber}</span> -- <span>{project.name}</span>
          </Accordion.Header>
          <Accordion.Body>

            <p>PO Number: {project.poNumber}</p>
            <p>Address: {project.address}</p>
            <p>City: {project.city}</p>
            <p>State: {project.state}</p>
            <p>Zipcode: {project.zipcode}</p>
            <p>Notes: {project.notes}</p>
            <p>Completed: {project.completed === true ? <span>Yes</span> : <span>No</span>} </p>
            <p>Assigned To: {project.assignedTo === null ? <span>Not Assigned Yet</span> : `${techs.find((tech) => tech.userId === project.assignedTo)?.firstName} ${techs.find((tech) => tech.userId === project.assignedTo)?.lastName}`}</p>
            <Button onClick={() => handleUpdateClick(project)}>Update</Button>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
