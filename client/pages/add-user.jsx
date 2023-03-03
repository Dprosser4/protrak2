import React, { useContext } from 'react';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';
import NewUserForm from '../components/new-user-form';

export default function AddUser() {
  const { user } = useContext(AppContext);
  if (!user) return <Redirect to="sign-in" />;

  return (

    <div className="row col-md-4 align-items-center text-align-center">
      <NewUserForm />
    </div>

  );
}
