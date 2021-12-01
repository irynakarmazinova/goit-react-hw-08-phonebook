import s from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.border}>&#169; 2021 Phonebook</p>
    </footer>
  );
}
