import React, { useContext } from 'react';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';
import { Col } from 'react-bootstrap';

export default function Home() {
  const { user } = useContext(AppContext);
  if (!user) return <Redirect to="sign-in" />;

  return (

    <Col className="text-center">
      <h2 className="fs-4">
        Welcome {`${user.firstName}!`}
      </h2>
    </Col>
  );
}
