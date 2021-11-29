import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from '../../constants/constants';

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);

      //  if (data) {
      //         return data;
      //       }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
      // return console.log(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.messages);
      // return console.log(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      // return rejectWithValue(error.messages);
      return console.log(error.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'aurh/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      // return console.log('error');
      return rejectWithValue();
    }
    // if (persistedToken === null) {
    //     return rejectWithValue();
    //   }

    token.set(persistedToken);

    try {
      // const response = await axios.get('/users/current');
      // const initialState = {
      //   user: response.data,
      //   token: persistedToken,
      //   isLoggin: true,
      //   loading: false,
      // };
      // return initialState;

      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // return rejectWithValue(error.message);
      return console.log(error.message);
    }
  },
);

// -------------------
// вместо куки токены
