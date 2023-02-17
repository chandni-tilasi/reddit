import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    add(state, action) {
     state. unshift(action.payload);
    },
  },
});

export const {add} = postSlice.actions;

export default postSlice.reducer;
