import { createSlice } from "@reduxjs/toolkit";

const initialState = {
products:[],
detail:[]
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
   getProducts:(state,action)=>{
  state.products=action.payload;
   },
   getDetail:(state,action)=>{
    state.detail=action.payload;
   },
   
  },
});
export const {} = productSlice.actions;
export default productSlice.reducer;

export function getProducts(id) {
  return async function (dispatch) {
   const url='http://localhost:7777/products'
      const resp = await fetch(`${url}`);
      const data = await resp.json();
      dispatch({ type: "products/getProducts", payload: data.filter((product)=>product.categoryId==id) });
    }
  }
export function getDetail(id) {
  return async function (dispatch) {
   const url=`http://localhost:7777/products`
      const resp = await fetch(`${url}`);
      const data = await resp.json();
      dispatch({ type: "products/getDetail", payload: data.filter((product)=>product.id==id) });
  
    }
  }

