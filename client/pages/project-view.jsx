import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';
import { Accordion, Button } from 'react-bootstrap';
import UpdateForm from '../components/update-form';

export default function ProjectView() {
  const [projects, setProjects] = useState([]);
  const [updateProject, setUpdateProject] = useState(null);

  function handleUpdateClick(project) {
    setUpdateProject(project);
  }

  function onSave() {
    setUpdateProject(null);
  }

  function onCancel() {
    setUpdateProject(null);
  }

  useEffect(() => {
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => { console.error('Error:', error); });
  }, [updateProject]);

  const { user } = useContext(AppContext);
  if (!user) return <Redirect to="sign-in" />;

  if (updateProject) {
    return (<UpdateForm project={updateProject} onSave={onSave} onCancel={onCancel} />);
  }

  return (
    <>
      <div className="row col-md-4 align-items-center text-align-center">
        <div className='text-center'>
          <h2 className="fs-4">
            All Projects
          </h2>
        </div>
      </div>
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
              <p>Completed: {project.completed === true ? <span>Yes</span> : <span>No</span> } </p>
              <p>Assigned To: {project.assignedTo === null ? <span>Not Assigned Yet</span> : project.assignedTo}</p>
              <Button onClick={() => handleUpdateClick(project)}>Update</Button>

            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}
