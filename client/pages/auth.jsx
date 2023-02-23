import React, { useContext } from 'react';
import Redirect from '../components/redirect';
import AuthForm from '../components/auth-form';
import AppContext from '../lib/app-context';

export default function AuthPage() {
  const { user, route, handleSignIn } = useContext(AppContext);
  if (user) return <Redirect to="" />;

  const welcomeMessage = route.path === 'sign-in'
    ? 'Please sign in to continue'
    : 'Create an account to get started!';
  return (
    <div className="row col-md-4 align-items-center text-align-center">
      <div className='text-center'>
        <h2 className="fs-4">
          Welcome to Protrak2
        </h2>
        <p className="text-muted mb-4">{welcomeMessage}</p>
      </div>
      <AuthForm
            key={route.path}
            action={route.path}
            onSignIn={handleSignIn} />

    </div>
  );
}
