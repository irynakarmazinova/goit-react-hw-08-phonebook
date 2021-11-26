import { createReducer, createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLogIn: false,
  loading: false,
};

const auth = createReducer(initialState, {
  [register.fulfilled]: (_, action) => action.payload,
  [logIn.fulfilled]: (_, action) => action.payload,
  [logOut.fulfilled]: () => initialState,
  [refreshUser.fulfilled]: (_, action) => action.payload,
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => (state.loading = true),
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
      state.loading = false;
    },
    [register.rejected]: state => (state.loading = false),

    [logIn.pending]: state => (state.loading = true),
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
      state.loading = false;
    },
    [logIn.rejected]: (state, action) => (state.loading = false),

    [logOut.pending]: state => (state.loading = true),
    [logOut.fulfilled]: state => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLogIn = false;
      state.loading = false;
    },
    [logOut.rejected]: state => (state.loading = false),

    // [refreshUser.pending]: state => (state.loading = true),
    // [refreshUser.fulfilled]: (state, action) => {
    //   state.user = action.payload;
    //   // state.token = action.payload.token;
    //   state.isLogIn = true;
    //   state.loading = false;
    // },
    // [refreshUser.rejected]: state => (state.loading = false),
  },
});

// export const { register, logIn, logOut } = authSlice.action;
// export default authSlice.reducer;
export default auth;
