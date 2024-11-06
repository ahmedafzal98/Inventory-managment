import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    open: false,
    message: "",
    severity: "success",
  },
  reducers: {
    openSnakbar: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity || "success";
    },
    closeSnackbar: (state) => {
      state.open = false;
      state.message = ''
    },
  },
});

export const { openSnakbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
