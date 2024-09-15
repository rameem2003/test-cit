import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "counter",
  initialState: {
    user: localStorage.getItem("exam")
      ? JSON.parse(localStorage.getItem("exam"))
      : null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("exam", JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = AuthSlice.actions;

export default AuthSlice.reducer;
