import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';

export default function Home() {
  const { user, handleSignOut } = useContext(AppContext);
  if (!user) return <Redirect to="sign-in" />;

  return (
    <div>
      <h1>Hey You Logged in!</h1>
      <Button variant="primary" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
}
