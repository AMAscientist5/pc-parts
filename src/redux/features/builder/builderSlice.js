import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0
};

export const builderSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    addToBuild: (state, action) => {
      state.products.push({...action.payload})
    },
    removeFromBuilder: (state, action) => {
      state.products = state.products.filter((product)=>{
        product._id !== action.payload._id
      })
    }
  },
});

export const { addToBuild,removeFromBuilder } = builderSlice.actions;

export default builderSlice.reducer;
