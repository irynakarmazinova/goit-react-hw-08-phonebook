import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.scss';

export function AuthNav() {
  return (
    <>
      <NavLink
        // exact
        to="/register"
        className={s.link}
        // activeClassName={s.link_active}
      >
        Register
      </NavLink>
      <NavLink
        // exact
        to="/login"
        className={s.link}
        // activeClassName={s.link_active}
      >
        Login
      </NavLink>
    </>
  );
}
