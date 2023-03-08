import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function UsersAccordian({ users }) {

  return (
    <Accordion>
      {users.map((user) => (
        <Accordion.Item key={user.username} eventKey={user.username}>
          <Accordion.Header>
            <span className='fw-bolder'>{user.username}</span>
          </Accordion.Header>
          <Accordion.Body>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
