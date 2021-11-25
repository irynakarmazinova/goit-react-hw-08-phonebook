import Title from '../../components/Title/Title';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';

import Filter from '../../components/Filter/Filter';

export function ContactsView() {
  return (
    <>
      <Title title="Phonebook" />
      <ContactForm />

      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </>
  );
}
