import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/contacts/contacts-operation';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      dispatch(fetchContacts());
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      dispatch(fetchContacts());
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const persistedToken = auth.token;

    if (!persistedToken) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
