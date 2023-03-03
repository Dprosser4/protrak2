import React, { useContext, useState, useEffect } from 'react';
import Redirect from '../components/redirect';
import AppContext from '../lib/app-context';
import UsersAccordian from '../components/users-accordian';
import { Button } from 'react-bootstrap';

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AppContext);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => { console.error('Error:', error); });
  }, []);

  if (!user) return <Redirect to="" />;

  const adminUsers = users.filter((user) => user.role === 'admin');
  const techUsers = users.filter((user) => user.role === 'tech');

  return (
    <div className="row col-md-4 align-items-center text-align-center">
      <div className='text-center'>
        <h2 className="fs-4">
          User Management
        </h2>
      </div>

      <h5 className='fs-6'>Admin Users:</h5>
      <UsersAccordian users={adminUsers} />
      <h5 className='fs-6 pt-3'>Technician Users:</h5>
      <UsersAccordian users={techUsers} />
      <div className='pt-3'>
        <Button variant="primary" href="#adduser">
          Add New User
        </Button>
      </div>
    </div>
  );
}
