import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  //If user login is not finished
  if (isLoading || !admin) {
    return (
      <div className='text-center'>
        <Spinner style={{ paddingTop: '100px' }} animation="grow" variant="warning" />
      </div>
    )
  };
  // console.log(isLoading, admin)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (user?.email || user?.displayName) && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;