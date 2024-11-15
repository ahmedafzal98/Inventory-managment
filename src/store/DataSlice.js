import { createSlice } from "@reduxjs/toolkit";
import {
  productManagmentDetails,
  orderManagmentDetails,
  lastOrders,
} from "../data/data";

console.log(lastOrders);

const DataSlice = createSlice({
  name: "data",
  initialState: {
    productManagmentDetails,
    orderManagmentDetails,
    lastOrders,
  },
  reducers: {},
});

export const selectProducts = (state) => state.data.productManagmentDetails;
export const selectOrders = (state) => state.data.orderManagmentDetails;
export const selectLastOrders = (state) => state.data.lastOrders;

export default DataSlice.reducer;
