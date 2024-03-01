import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show:false,
  search:""
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   
    toggleShow:(state,action)=>{
        state.show=action.payload
    },
     setSearchValue:(state,action)=>{
        state.search=action.payload
     }
    
  },
});
export const {toggleShow,setSearchValue} = userSlice.actions;
export default userSlice.reducer;