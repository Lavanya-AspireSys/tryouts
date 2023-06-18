import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const UnauthorizedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);
export default UnauthorizedRoute;
