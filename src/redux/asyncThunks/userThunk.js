import { createAsyncThunk } from "@reduxjs/toolkit"
import { signinApi, signupApi } from "../../services"
import { ToastContainer, toast } from "react-toastify"

export const signUp = createAsyncThunk(
  "signup",
  async ({ username, email, password }) => {
    try {
      const response = await signupApi(username, email, password)

      toast.success("signup success", {})

      return response?.data
    } catch (error) {

      toast.error(`${error?.response?.data?.message} username , email must unique`  , {})
    }
  }
)
export const signIn = createAsyncThunk(
  "signin",
  async ({ email, password }) => {
    try {
      const response = await signinApi(email, password)


        return  response?.data

    } catch (error) {

      toast.error(error?.response?.data?.message)


    }
  }
)
