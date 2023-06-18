import React, { useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { GlobalContext } from "../../context/GlobalState";


const AuthorizedRoute = ({ component: Component, ...rest }) => {
	const { isLoggedIn } = useContext(GlobalContext);
	const history = useHistory();

  if (!isLoggedIn) {
    history.push('/login');
    return null; // Render nothing or a loading spinner while redirecting
  }

  return <Route {...rest} component={Component} />;
};

export default AuthorizedRoute;