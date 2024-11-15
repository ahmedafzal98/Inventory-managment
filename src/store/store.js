import { configureStore } from "@reduxjs/toolkit";

import snackbarSlice from "./SnackbarSlice";
import UserSlice from "./UserSlice";
import dialogReducer from "./DialogReducer";
import dataReducer from "./DataSlice";

const store = configureStore({
  reducer: {
    snackbar: snackbarSlice,
    users: UserSlice,
    dialog: dialogReducer,
    data: dataReducer,
  },
});

export default store;
