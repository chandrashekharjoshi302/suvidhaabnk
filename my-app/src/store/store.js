

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginSlice';
import signupReducer from './reducers/signupSlice';


export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  

  },
});
