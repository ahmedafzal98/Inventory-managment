import { configureStore } from "@reduxjs/toolkit";

import snackbarSlice from "./SnackbarSlice";
import UserSlice from "./UserSlice";
import dialogReducer from "./DialogReducer";

const store = configureStore({
  reducer: {
    snackbar: snackbarSlice,
    users: UserSlice,
    dialog: dialogReducer,
  },
});

export default store;
