import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../services/slices/Auth'

export default configureStore({
  reducer: {
    auth: authReducer,
  },
})
