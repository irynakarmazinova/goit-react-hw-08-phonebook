import { NavLink } from 'react-router-dom';

import s from './Navigation.module.scss';

export function Navigation() {
  return (
    <>
      <NavLink
        // exact
        to="/"
        className={s.link}
        // activeclassname={s.link_active}
      >
        Home
      </NavLink>
    </>
  );
}
