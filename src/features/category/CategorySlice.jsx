import { createSlice } from "@reduxjs/toolkit";

const initialState = {
category:[]
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategory:(state,action)=>{
    state.category=action.payload
    }

    
  },
});
export const {r } = categorySlice.actions;
export default categorySlice.reducer;

export function getCategory(url) {
  return async function (dispatch) {
  
      const resp = await fetch(
        `${url}`
      );
      const data = await resp.json();
      dispatch({ type: "category/getCategory", payload: data });
   
  };
}
