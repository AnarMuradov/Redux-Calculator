import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: [],
  },
  reducers: {
    Sum: (state, action) => {
      state.value = +action.payload[0] + +action.payload[1];
    },
    minus: (state, action) => {
      state.value = +action.payload[0] - +action.payload[1];
    },
    multiply: (state, action) => {
      state.value = +action.payload[0] * +action.payload[1];
    },
    divide: (state, action) => {
      if (+action.payload[1] === 0) {
        alert("0 olmaz");
        return;
      }
      state.value = +action.payload[0] * +action.payload[1];
    },
  },
});

export const { Sum, minus, multiply, divide } = calculatorSlice.actions;

export default calculatorSlice.reducer;
