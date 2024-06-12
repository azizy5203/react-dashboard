import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

import { toast } from "react-toastify";
const showToast = (msg, type = "success") =>
  toast(msg, {
    draggable: true,
    type: type,
    theme: "light",
    autoClose: 1300,
  });
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: "ss" },
    token: localStorage.getItem("TOKEN"),
  },
  reducers: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    setStoreState: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },

    logoutUser: () => {
      return {
        user: null,
        token: null,
      };
    },
  },
});

export const { getUser, getToken, logoutUser, setStoreState } =
  authSlice.actions;

export default authSlice.reducer;
