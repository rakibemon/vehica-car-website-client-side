import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
  //If user login is not finished
  if (isLoading) {
    return (
      <div className='text-center'>
        <Spinner style={{ paddingTop: '100px' }} animation="grow" variant="warning" />
      </div>
    )
  }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email || user?.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;