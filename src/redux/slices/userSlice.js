import { createSlice } from "@reduxjs/toolkit"
import { signIn, signUp } from "../asyncThunks"
import { ToastContainer, toast } from "react-toastify"



const initialState = {
  user: {},
  status: "idle",
  isLoggedIn: false,
}
const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    logOut: state => {
      state.token = "";
      state.user = {};
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.status = "loading"
    },
    [signUp.fulfilled]: (state, action) => {
      state.status = "resolved"
      const res = action.payload
      state.user = res?.user
    },
    [signUp.rejected]: (state) => {
      state.status = "failed"
    },
    //
    [signIn.pending]: (state) => {
      state.status = "loading"
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = "resolved"
      const res = action.payload
      state.user = res?.user
      state.isLoggedIn = res?.success
    },
    [signIn.rejected]: (state) => {
      state.status = "failed"
    },
  },
})
export const { logOut  } = userSlice.actions

export const { reducer: userReducer } = userSlice
