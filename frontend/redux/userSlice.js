import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  user: {},
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUsers, setUser } = userSlice.actions;

export default userSlice.reducer;
