import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  like:[]
};
const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike:(state,action)=>{
state.like=[...state.like,action.payload]
    },
    removeLike:(state,action)=>{
        state.like= state.like.filter(user=>user.id !==action.payload)
     },
  },
});
export const { addLike,removeLike} = likeSlice.actions;
export default likeSlice.reducer;
