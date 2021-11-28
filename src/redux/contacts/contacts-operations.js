import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import { BASE_URL } from '../../constants/constants';

// // axios.defaults.baseURL = 'https://6187f432057b9b00177f9b5a.mockapi.io/api/v1';
// axios.defaults.baseURL = BASE_URL;

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     try {
//       const { data } = await axios.get('/contacts');
//       return data;
//     } catch (error) {
//       return console.log(error.message);
//     }
//   },
// );
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContact',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async contact => {
//     try {
//       const { data } = await axios.post('/contacts', contact);
//       return data;
//     } catch (error) {
//       return console.log(error.message);
//     }
//   },
// );
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const { data } = await axios.post('/contacts', { name, number });
    return data;
  },
);

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async contactId => {
//     try {
//       const {
//         data: { id },
//       } = await axios.delete(`/contacts/${contactId}`);

//       return id;

//       // async contactId => {
//       //   await axios.delete(`/contacts/${contactId}`);
//       //   return contactId;
//       // },
//     } catch (error) {
//       return console.log(error.message);
//     }
//   },
// );
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  },
);
