import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getIsLogIn } from '../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLogIn = useSelector(getIsLogIn);
  const shouldRedirect = isLogIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
