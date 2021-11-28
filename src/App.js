import { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { fetchContacts } from './redux/contacts/contacts-operations';
import { refreshUser } from './redux/auth/auth-operations';

import { Navigation } from './components/Navigation/Navigation';
import { AuthNav } from './components/AuthNav/AuthNav';
import { UserMenu } from './components/UserMenu/UserMenu';

import { getIsLogIn, getIsFetchingCurrent } from './redux/auth/auth-selectors';

import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

import './App.scss';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "HomeView" */),
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /* webpackChunkName: "RegisterView" */
  ),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "ContactsView" */
  ),
);

export default function App() {
  const isLogIn = useSelector(getIsLogIn);
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <div className="container">
          <header style={{ display: 'flex', marginBottom: '20px' }}>
            <Navigation />
            {isLogIn ? <UserMenu /> : <AuthNav />}
          </header>

          <main>
            {/* <Switch> */}
            <Suspense fallback={<h1>Loading...</h1>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                restricted
                redirectTo="/contacts"
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </main>

          <footer>footer</footer>
        </div>
      </>
    )
  );
}
// ---------------------------------------------------
// action.meta && action.meta.ga === action?.meta?.ga - необязатльный

// RTK redux toolkit query - для управления серверным состоянием из приложения

// query - get
