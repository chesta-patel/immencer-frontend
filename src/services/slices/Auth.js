import { createSlice } from '@reduxjs/toolkit'
import { login } from './AuthThunk'

const initialState = {
  isLoading: false,
  user: false,
  isAuthenticated: false,
  error: false,
  message: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        console.log('fullfield')
        state.isLoading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(login.pending, function (state) {
        console.log('pending')
        state.isLoading = true
      })
      .addCase(login.rejected, (state, action) => {
        console.log('rejected')
        console.log(action.payload.response.data.message)
        state.isLoading = false
        state.error = true
        state.message = action.payload.response.data.message
        state.user = null
      })
  },
})

export const {} = authSlice.actions
export default authSlice.reducer
