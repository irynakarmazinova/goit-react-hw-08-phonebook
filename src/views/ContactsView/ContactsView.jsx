import Title from '../../components/Title/Title';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';

import Filter from '../../components/Filter/Filter';

import s from './ContactsView.module.scss';

export default function ContactsView() {
  return (
    <>
      <Title title="This is contacts page." />

      <h2 className={s.title}>Phonebook</h2>
      <ContactForm />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
