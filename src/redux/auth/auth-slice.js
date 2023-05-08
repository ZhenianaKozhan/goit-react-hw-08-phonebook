import { fetchCurrentUser, logIn, logOut, register } from './auth-operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isFetchingCurrentUser: false,
  error: null,
};

const handlePending = state => {
  state.isFetchingCurrentUser = true;
};

const handleRejected = (state, { payload }) => {
  state.isFetchingCurrentUser = false;
  state.error = payload;
  // state.user = { name: null, email: null };
  // state.token = null;
};

const hundleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isFetchingCurrentUser = false;
  state.error = null;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // reducers: {

  // },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, hundleFulfilled)
      .addCase(logIn.fulfilled, hundleFulfilled)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isFetchingCurrentUser = false;
        state.error = null;
      })
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchingCurrentUser = false;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, handleRejected);
  },
});

export const authReducers = authSlice.reducer;
