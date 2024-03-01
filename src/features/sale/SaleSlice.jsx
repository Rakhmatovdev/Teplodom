import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sale: [],
};
const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    addSale: (state, action) => {
      state.sale = [...state.sale, action.payload];
    },
    removeSale: (state, action) => {
      state.sale = state.sale.filter((user) => user.id !== action.payload);
    },
  },
});
export const { addSale, removeSale } = saleSlice.actions;
export default saleSlice.reducer;
