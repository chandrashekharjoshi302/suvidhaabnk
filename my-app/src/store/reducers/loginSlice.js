

import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: localStorage.getItem('token') ? true : false,
    currentUser: null,
    error: null,
    loading: false,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      localStorage.setItem('token', action.payload.token); 
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, clearError } = loginSlice.actions;

export const login = (credentials) => async (dispatch) => {
  console.log(credentials)
  try {
    dispatch(loginRequest());
    const response = await fetch('http://reportapi.suvidhaabnk.com:8080/api/v1/basic/loginUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Invalid username or password');
    }

    const user = await response.json();
    dispatch(loginSuccess(user));
    throw new Error('You are logged in successfully!');
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export default loginSlice.reducer;
