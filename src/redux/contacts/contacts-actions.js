import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
// console.log(addContact('ir', 18));

export const deleteContact = createAction('contacts/delete');
// console.log(deleteContact(5));

// -----------------------------------
// deleteContact возвращает функцию createAction
// когда вызываешь deleteContact() она возарашает объект типа types.DELETE и пэйлоад 5. аргумент который передаешь в вызов этого экшнкриэйтера автоматич ставится на пэйлоад
