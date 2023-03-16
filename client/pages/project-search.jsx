import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';
import UpdateForm from '../components/update-form';
import ProjectsAccordian from '../components/project-accordian';
import { ScaleLoader } from 'react-spinners';
import { Button } from 'react-bootstrap';

export default function ProjectSearch() {
  const [projects, setProjects] = useState([]);
  const [updateProject, setUpdateProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [queryProjects, setQueryProjects] = useState([]);

  function handleUpdateClick(project) {
    setUpdateProject(project);
  }

  function onSave() {
    setUpdateProject(null);
  }

  function onCancel() {
    setUpdateProject(null);
  }

  function handleSearch() {
    setQueryProjects(completedProjects);
  }

  useEffect(() => {
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => { console.error('Error:', error); });
  }, [updateProject]);

  const { user } = useContext(AppContext);

  if (!user) return <Redirect to="sign-in" />;

  if (updateProject) {
    return (<UpdateForm project={updateProject} onSave={onSave} onCancel={onCancel} />);
  }

  if (isLoading) {
    return (<div className='d-flex mt-5 justify-content-center'>
      <ScaleLoader color="#136EFD" />
    </div>);
  }

  const completedProjects = projects.filter((project) => project.completed);
  const unassignedProjects = projects.filter((project) => project.assignedTo === null && !project.completed);
  const assignedProjects = projects.filter((project) => project.assignedTo && !project.completed);

  return (
    <div className="col-lg-4 text-align-center">
      <Button onClick={handleSearch}>Completed</Button>
      <h2 className="text-center mt-3 fs-4">
        Projects
      </h2>
      <ProjectsAccordian projects={queryProjects} handleUpdateClick={handleUpdateClick} />
      {queryProjects.length === 0 &&
      <p className='text-center'>There are no unassigned projects.</p>
        }
    </div>
  );
}
