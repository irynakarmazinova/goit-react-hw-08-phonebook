import { useSelector, useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';

import s from './UserMenu.module.scss';

export function UserMenu() {
  const name = useSelector(getUserName);

  const dispatch = useDispatch();

  return (
    <div className={s.box}>
      <p className={s.text}>Wellcome to phonebook, {name}!</p>

      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={s.btn}
      >
        Logout
      </button>
    </div>
  );
}
