import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';

import { getIsLogIn } from '../redux/auth/auth-selectors';

export function PrivateRoute({ children, ...routeProps }) {
  const isLogIn = useSelector(getIsLogIn);

  return (
    <Route {...routeProps}>
      {isLogIn ? children : <Redirect to="/register" />}
    </Route>
  );
}
