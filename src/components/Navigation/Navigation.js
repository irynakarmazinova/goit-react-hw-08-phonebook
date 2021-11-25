import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../../redux/auth/auth-operation';

import s from './Navigation.module.scss';

export function Navigation() {
  const dispatch = useDispatch();

  return (
    <div className={s.box}>
      <div className={s.links}>
        <NavLink to="/register" className={s.link}>
          Register
        </NavLink>
        <NavLink to="/login" className={s.link}>
          Login
        </NavLink>
        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      </div>

      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={s.btn}
      >
        Logout
      </button>
    </div>
  );
}
