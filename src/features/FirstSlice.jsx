import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backet: [],
  show:false,
  like:[],
  sale:[],
  search:""
};
const firstSlice = createSlice({
  name: "todo",
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
export const { addBacket,removeBacket,toggleShow,addLike,removeLike,addSale,removeSale,setSearchValue} = firstSlice.actions;
export default firstSlice.reducer;

// export function shotToldirish(amount, currency) {
//   return async function (dispatch) {
//     if (!currency === "USD") {
//       const resp = await fetch(
//         `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//       );
//       const data = await resp.json();
//       dispatch({ type: "acount/shotToldirish", payload: data.rates.USD });
//     } else {
//       dispatch({ type: "acount/shotToldirish", payload: amount });
//     }
//   };
// }
