import cookieCutter from "cookie-cutter";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from "../../utils/path/Path";
import { post, tokenpost } from "../../utils/query/Query";
// const CryptoJS = require("crypto-js");
import * as CryptoJS from "crypto-js";
import cookiesNames from "../../utils/constant/Constant";

const apiKey = import.meta.env.VITE_HOST;



export const setLogin = createAsyncThunk("login", async (data) => {
  try {
    const response = await post(Endpoint.login, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

// export const setLogin = createAsyncThunk("login", async (data) => {
//   console.log()
//   try {
//     const response = await tokenpost(data);
//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// });

export const signup = createAsyncThunk("sign-up", async (data) => {
  console.log("slicess");
  try {
    const response = await post(Endpoint.signup, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const varifyEmail = createAsyncThunk("varify-email", async (data) => {
  console.log("slicess");
  try {
    const response = await post(Endpoint.varifyEmail, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const initialStateValues = {
  isLogin: false,
  success: false,
  data: [],
  token: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialStateValues,
  reducers: {
    setAll: (state, action) => {
      state.isLogin = true;
      state.token = CryptoJS.AES.encrypt(action.payload.access_token, apiKey).toString()

    },
    signout: (state, action) => {
      state.isLogin = false;
      (state.data = []),
        (state.token = ""),
        cookieCutter.set(cookiesNames.HOW_THIS_MEASUREMENT_IS, null, { expires: new Date(0), });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLogin.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(setLogin.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.isLogin = true),
        (state.data = action.payload.data),
        (state.token = CryptoJS.AES.encrypt(
          action.payload.access_token,
          apiKey
        ).toString());
    });


    builder.addCase(setLogin.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(varifyEmail.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(varifyEmail.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.isLogin = true),
        (state.data = action.payload.data),
        (state.token = CryptoJS.AES.encrypt(
          action.payload.access_token,
          apiKey
        ).toString());
    });

    builder.addCase(varifyEmail.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { setlogin } = loginSlice.actions

export const { setAll, signout } = loginSlice.actions;

export default loginSlice.reducer;

function getThisTokenInStore(encrypted) {
  cookieCutter.set("token", "THIS TOKEN"); //token
  return encrypted;
}
