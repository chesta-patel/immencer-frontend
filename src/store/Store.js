import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../services/slices/Auth'
import messageReducer from '../services/slices/Message'
export default configureStore({
  reducer: {
    authenticate: authReducer,
    message: messageReducer,
  },
})
