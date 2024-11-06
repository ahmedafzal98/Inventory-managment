import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: {
    uid: "",
  },
  reducers: {
    getUserId: (state, actions) => {
      state.uid = actions.payload.uid;
    },
  },
});

export const { getUserId } = UserSlice.actions;
export default UserSlice.reducer;
