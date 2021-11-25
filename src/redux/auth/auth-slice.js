import { createReducer, createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './auth-operation';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLogin: false,
  loading: false,
};

const auth = createReducer(initialState, {
  [register.fulfilled]: (_, action) => action.payload,
  [login.fulfilled]: (_, action) => action.payload,
  [logout.fulfilled]: () => initialState,
  [refreshUser.fulfilled]: (_, action) => action.payload,
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: (state, action) => (state.loading = true),
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogin = true;
    },
    [register.rejected]: (state, action) => (state.loading = false),

    [login.pending]: state => (state.loading = true),
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLogin = true;
    },
    [login.rejected]: (state, action) => (state.loading = false),

    [logout.pending]: state => (state.loading = true),
    [logout.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = null;
      state.user = { name: '', email: '' };
      state.isLogin = false;
    },
    [logout.rejected]: (state, action) => (state.loading = false),
  },
});
// export const { register, login, logout } = authSlice.action;
// export default authSlice.reducer;
export default auth;
