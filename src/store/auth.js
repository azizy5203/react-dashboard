import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "@/vendors/axios";

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
    setState: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    loginUser: async (state, { payload }) => {
      console.log("🚀 ~ loginUser: ~ payload:", payload);
      try {
        const { data } = await axios.post("/auth/login", payload);
        state.user = data.user;
        state.token = data.token;
        localStorage.setItem("TOKEN", data.token);
        Navigate("/users");
        console.log("🚀 ~ userLogin ~ data.Data:", data);
      } catch (error) {
        showToast("Login Failed", "error");
      }
    },
    logoutUser: () => {
      return {
        user: null,
        token: null,
      };
    },
  },
});

export const { getUser, getToken, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
