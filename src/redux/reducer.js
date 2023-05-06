import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk(
  'greeting/getGreetings',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/greetings');
    const data = await response.json();
    return data;
  },
);

const greetingReducer = createSlice({
  name: 'greeting',
  initialState: [],
  reducers: {
    Greeting(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [getGreetings.fulfilled]: (state, action) => action.payload,
  },
});

export const { Greeting } = greetingReducer.actions;
export default greetingReducer.reducer;
