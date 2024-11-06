import { configureStore } from "@reduxjs/toolkit";

import snackbarSlice from "./SnackbarSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    snackbar: snackbarSlice,
    users: UserSlice,
  },
});

export default store;
