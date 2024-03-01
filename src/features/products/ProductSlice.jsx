import { createSlice } from "@reduxjs/toolkit";

const initialState = {
product:[]
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
   
    
  },
});
export const {r} = productSlice.actions;
export default productSlice.reducer;

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
