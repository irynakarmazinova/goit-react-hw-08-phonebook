import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';

import { getIsLogIn } from '../redux/auth/auth-selectors';

export function PublicRoute({ children, restricted = false, ...routeProps }) {
  const isLogIn = useSelector(getIsLogIn);
  const shouldRedirect = isLogIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
