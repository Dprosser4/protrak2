import React, { useContext } from 'react';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';
import ProjectForm from '../components/project-form';

export default function CreateProject() {
  const { user } = useContext(AppContext);
  if (!user) return <Redirect to="sign-in" />;

  return (
    <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 align-items-center text-align-center">
      <div className='text-center'>
        <h2 className="fs-4">
          Create a New Project
        </h2>
      </div>
      <ProjectForm />
    </div>
  );
}
