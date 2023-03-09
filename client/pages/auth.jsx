import React, { useContext } from 'react';
import Redirect from '../components/redirect';
import AuthForm from '../components/auth-form';
import AppContext from '../lib/app-context';

export default function AuthPage() {
  const { user, handleSignIn } = useContext(AppContext);
  if (user) return <Redirect to="" />;

  return (
    <div className="col-md-6">
      <div className='text-center'>
        <h2 className="fs-4">
          Welcome to Protrak2
        </h2>
        <p className="text-muted mb-4">Please sign in to continue</p>
      </div>
      <AuthForm onSignIn={handleSignIn} />
    </div>
  );
}
