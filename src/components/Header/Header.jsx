import { useSelector } from 'react-redux';

import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

import { getIsLogIn } from '../../redux/auth/auth-selectors';

import s from './Header.module.scss';

export function Header() {
  const isLogIn = useSelector(getIsLogIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLogIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
