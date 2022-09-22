import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../services/slices/Auth'
import dropdown from '../services/slices/Master'

export default configureStore({
  reducer: {
    auth: authReducer,
    dropdown: dropdown,
  },
})
