import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getvisibleContacts } from '../../redux/contacts/contacts-selectors';

import s from './ContactList.module.scss';

const ContactList = () => {
  const visibleContacts = useSelector(getvisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));
  // ({ target }) => dispatch(deleteContact(target.id));

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <div className={s.box}>
            <p className={s.name}>{name}: </p>
            <p className={s.number}>{number}</p>
            <button className={s.btn} onClick={() => onDeleteContact(id)}>
              {/* <button className={s.btn} onClick={onDeleteContact}> id={id} */}
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
