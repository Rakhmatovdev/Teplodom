import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  like:[]
};
const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addBacket: (state, action) => {
       state.backet=[...state.backet,action.payload]
    },
    removeBacket:(state,action)=>{
       state.backet= state.backet.filter(user=>user.id !==action.payload)
    },
    toggleShow:(state,action)=>{
        state.show=action.payload
    },
    addLike:(state,action)=>{
state.like=[...state.like,action.payload]
    },
    removeLike:(state,action)=>{
        state.like= state.like.filter(user=>user.id !==action.payload)
     },
    addSale:(state,action)=>{
state.sale=[...state.sale,action.payload]
    },
    removeSale:(state,action)=>{
        state.sale= state.sale.filter(user=>user.id !==action.payload)
     },
     setSearchValue:(state,action)=>{
        state.search=action.payload
     }
    
  },
});
export const { addLike,removeLike} = likeSlice.actions;
export default likeSlice.reducer;
