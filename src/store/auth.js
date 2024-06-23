import { createSlice } from "@reduxjs/toolkit";
import axios from "@/vendors/axios";

import router from "@/router";
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

    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("TOKEN");
      router.navigate("/login");
    },
  },
});

export const login = (values) => {
  // const navigate = useNavigate();
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/auth/login", values);
      dispatch(setStoreState(data));
      localStorage.setItem("TOKEN", data.token);
      showToast("logged in !");
      router.navigate("/users");
    } catch (error) {
      console.error("Store Login Error", error);
      showToast("Invalid Credentials", "error");
    }
  };
};
export const register = (values) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/auth/register", values);
      dispatch(setStoreState(data));
      showToast("registration successful!");
      router.navigate("/login");
    } catch (error) {
      console.error("Store registration Error", error);
      showToast("Invalid Data", "error");
    }
  };
};

export const { getUser, getToken, logout, setStoreState } = authSlice.actions;

export default authSlice.reducer;
