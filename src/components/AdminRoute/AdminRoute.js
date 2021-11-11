import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user,admin, isLoading} = useAuth();
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
          (user.email || user.displayName) && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;