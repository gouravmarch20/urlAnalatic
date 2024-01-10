import { createSlice } from '@reduxjs/toolkit'
import { createUrl  } from '../asyncThunks'

const initialState = {
  sortUrl: "",
  allSortUrl:[],
  status: 'idle',
  isUrlModalOpen : false
}
const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    closeUrlModal: (state) => {
      state.isUrlModalOpen = false
    },
    
 
  },
  extraReducers: {
    [createUrl.pending]: state => {

      state.status = 'loading'
    },
    [createUrl.fulfilled]: (state, action) => {
     
    

      state.status = 'resolved'

      if(action.payload){
        state.sortUrl = action.payload?.id
        state.isUrlModalOpen = true
      }
    
    },
    [createUrl.rejected]: state => {
      state.status = 'failed'
    }
  }
})
export const { closeUrlModal  } = urlSlice.actions


export const { reducer: urlReducer } = urlSlice
