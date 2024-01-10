import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { ToastContainer, toast } from "react-toastify"

import { getAnalyticApi, createSortUrlApi } from "../../services"

export const createUrl = createAsyncThunk(
  "createUrl",
  async ({ url , username , email}) => {
    try {

      const response = await createSortUrlApi(url ,  username , email)
      toast.success("new url created ")
      return response?.data
    } catch (error) {
      toast.error('fail to create !', {
    });
    }
  }
)

