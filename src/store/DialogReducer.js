// src/redux/reducers/dialogReducer.js

import { OPEN_DIALOG, CLOSE_DIALOG } from "./DialogAction";

const initialState = {
  isDialogOpen: false,
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case CLOSE_DIALOG:
      return { ...state, isDialogOpen: false };
    default:
      return state;
  }
};

export default dialogReducer;
