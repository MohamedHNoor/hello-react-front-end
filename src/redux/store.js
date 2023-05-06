import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducer';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
