// slices/signupSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    isLoggedIn: false,
    currentUser: null,
    error: null,
    loading: false,
  },
  reducers: {
    signupRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
      state.error = null;
    },
  },
});

export const { signupRequest, signupSuccess, signupFailure, logout } = signupSlice.actions;

export const signup = (credentials) => async (dispatch) => {
  console.log(credentials)
  try {
    dispatch(signupRequest());
    const response = await fetch('https://fakestoreapi.com/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Failed to signup');
    }

    const user = await response.json();
    dispatch(signupSuccess(user));
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};

export default signupSlice.reducer;
