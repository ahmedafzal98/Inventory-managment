import { configureStore } from "@reduxjs/toolkit";

import snackbarSlice from "./SnackbarSlice";

const store = configureStore({
  reducer: {
    snackbar: snackbarSlice,
  },
});

export default store;
