import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    user: JSON.parse(localStorage.getItem("USER")),
    token: localStorage.getItem("TOKEN"),
    isLoading: false,
  },
  reducers: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    setStoreState: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    setLodaing: (state, { payload }) => (state.isLoading = payload),

    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("USER");
      localStorage.removeItem("TOKEN");
      router.navigate("/login");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("USER", JSON.stringify(action.payload.user));
      localStorage.setItem("TOKEN", action.payload.token);
      showToast("logged in !");
    });

    builder.addCase(login.rejected, (state, action) => {
      console.error(action.error);
      showToast("Invalid Credentials", "error");
      return action.error;
    });
  },
});

export const login = createAsyncThunk(
  "auth/login",
  async (values, thunkAPI) => {
    const { data } = await axios.post("/auth/login", values);
    return data;
  }
);

export const register = (values, isAdmin) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/auth/register", {
        ...values,
        IsAdmin: isAdmin,
      });
      dispatch(setStoreState(data));
      showToast("registration successful!");
      router.navigate("/login");
    } catch (error) {
      console.error("Store registration Error", error);
      showToast("Invalid Data", "error");
    }
  };
};

export const { getUser, getToken, logout, setStoreState, setLodaing } =
  authSlice.actions;

export default authSlice.reducer;
