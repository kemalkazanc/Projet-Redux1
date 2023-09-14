import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.value++;
    },
    decrement: (state, action) => {
      state.value--;
      console.log(action);
    },
    multiply: (state, action) => {
      state.value = state.value * 10;
      console.log(action);
    },
    divide: (state, action) => {
      state.value = state.value / 10;
      console.log(action);
    },
  },
});

//console.log(counter);
export const { increment, decrement, multiply, divide } = counter.actions;
export default counter.reducer;
