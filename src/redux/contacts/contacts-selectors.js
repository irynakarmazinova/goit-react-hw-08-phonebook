import { getFilterValue } from '../filter/filter-selectors';

export const getContacts = state => state.contacts.items;

export const getvisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilterValue(state);

  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      number.includes(filter),
  );
};

// ---------------------------------
// селекторы это функции которые знают о том, как выглядит состояние, о внешнем виде
