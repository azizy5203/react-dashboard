import { createSlice } from "@reduxjs/toolkit";
import axios from "@/vendors/axios";

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

export const loginRequest = ({ username, password }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/auth/login", { username, password });
      dispatch(setStoreState(data));
      showToast("logged in !");
    } catch (error) {
      console.error("Store Login Error", error);
      showToast("Invalid Credentials", "error");
    }
  };
};

export const { getUser, getToken, logoutUser, setStoreState } =
  authSlice.actions;

export default authSlice.reducer;
