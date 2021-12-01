import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLogIn } from '../../redux/auth/auth-selectors';

import s from './Navigation.module.scss';

export function Navigation() {
  const isLogIn = useSelector(getIsLogIn);

  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.link_active}>
        Home
      </NavLink>

      {isLogIn && (
        <NavLink
          exact
          to="/contacts"
          className={s.link}
          activeClassName={s.link_active}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
