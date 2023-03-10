import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';
import { Accordion, Button } from 'react-bootstrap';
import TechUpdateForm from '../components/tech-update-form';
import { ScaleLoader } from 'react-spinners';

export default function TechProjectView() {
  const [projects, setProjects] = useState([]);
  const [updateProject, setUpdateProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AppContext);
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
    if (!user) {
      return;
    }
    fetch(`/api/projects/assigned/${user.userId}`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => { console.error('Error:', error); });
  }, [updateProject, user]);

  if (!user) return <Redirect to="sign-in" />;

  if (updateProject) {
    return (<TechUpdateForm project={updateProject} onSave={onSave} onCancel={onCancel} />);
  }

  if (isLoading) {
    return (<div className='d-flex mt-5 justify-content-center'>
      <ScaleLoader color="#136EFD" />
    </div>);
  }

  return (
    <>
      <div className="row col-md-4 align-items-center text-align-center">
        <div className='text-center'>
          <h2 className="fs-4">
            Assigned Projects
          </h2>
          {projects.length === 0 &&
          <p>There are no projects assigned to you</p>
          }
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
              <Button onClick={() => handleUpdateClick(project)}>Update</Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}
