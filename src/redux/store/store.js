import { configureStore } from '@reduxjs/toolkit'
import { userReducer ,urlReducer} from '../slices'

const store = configureStore({
  reducer: { userDetails : userReducer , url : urlReducer }
})

export { store }
