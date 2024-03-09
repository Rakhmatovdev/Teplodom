import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backet: [],
};
const basketSlice = createSlice({
  name: "backet",
  initialState,
  reducers: {
    addBacket: (state, action) => {
      state.backet=[...state.backet,action.payload]
    },
    removeBacket:(state,action)=>{
       state.backet= state.backet.filter(user=>user.id !==action.payload)
    },
  },
});
export const { addBacket,removeBacket} = basketSlice.actions;
export default basketSlice.reducer;

