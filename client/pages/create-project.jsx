import React, { useContext } from 'react';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';
import ProjectForm from '../components/project-form';

export default function CreateProject() {
  const { user } = useContext(AppContext);
  if (!user) return <Redirect to="sign-in" />;

  return (
    <div className="row col-md-4 align-items-center text-align-center">
      <div className='text-center'>
        <h2 className="fs-4">
          Create a New Project
        </h2>
      </div>
      <ProjectForm />
    </div>
  );
}
