// Добавь компонент <UserMenu>, состоящий из почты пользователя и кнопки Logout.
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logOut } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';

import s from './UserMenu.module.scss';

export function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <>
      <NavLink
        // exact
        to="/contacts"
        className={s.link}
        // activeclassname={s.link_active}
      >
        Contacts
      </NavLink>

      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={s.btn}
      >
        Logout
      </button>

      <p>Wellcome to phonebook, {name}!</p>
    </>
  );
}
