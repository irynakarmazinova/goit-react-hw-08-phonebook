import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { register, logIn, logOut, refreshUser } from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLogIn: false,
  loading: false,
};
const user = createReducer(initialState, {
  [register.fulfilled]: (_, { payload }) => payload.user,
  [logIn.fulfilled]: (_, { payload }) => payload.user,
  [logOut.fulfilled]: () => initialState,
  [refreshUser.fulfilled]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [register.fulfilled]: (_, { payload }) => payload.token,
  [logIn.fulfilled]: (_, { payload }) => payload.token,
  [logOut.fulfilled]: () => null,
});

const isLogIn = createReducer(false, {
  [register.fulfilled]: () => true,
  [logIn.fulfilled]: () => true,
  [logOut.fulfilled]: () => false,
  [refreshUser.fulfilled]: () => true,
});

const loading = createReducer(false, {
  [refreshUser.pending]: () => true,
  [refreshUser.fulfilled]: () => false,
  [refreshUser.rejected]: () => false,
});

export const authReducer = combineReducers({
  user,
  token,
  isLogIn,
  loading,
});
