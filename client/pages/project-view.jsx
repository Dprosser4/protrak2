import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';
import UpdateForm from '../components/update-form';
import ProjectsAccordian from '../components/project-accordian';

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

  const completedProjects = projects.filter((project) => project.completed);
  const unassignedProjects = projects.filter((project) => project.assignedTo === null && !project.completed);
  const assignedProjects = projects.filter((project) => project.assignedTo && !project.completed);

  return (
    <>
      <div className="col-lg-4 text-align-center">
        <h2 className="text-center mt-3 fs-4">
          Unassigned Projects
        </h2>
        <ProjectsAccordian projects={unassignedProjects} handleUpdateClick={handleUpdateClick} />
        {unassignedProjects.length === 0 &&
        <p>There are no unassigned projects.</p>
          }
      </div>
      <div className="col-lg-4 text-align-center">
        <h2 className="text-center mt-3 fs-4">
          Assigned Projects
        </h2>
        <ProjectsAccordian projects={assignedProjects} handleUpdateClick={handleUpdateClick} />
        {assignedProjects.length === 0 &&
        <p>There are no assigned projects.</p>
          }
      </div>
      <div className="col-lg-4 text-align-center">
        <h2 className="text-center mt-3 fs-4">
          Completed Projects
        </h2>
        <ProjectsAccordian projects={completedProjects} handleUpdateClick={handleUpdateClick} />
        {completedProjects.length === 0 &&
        <p>There are no completed projects.</p>
          }
      </div>
    </>
  );
}
