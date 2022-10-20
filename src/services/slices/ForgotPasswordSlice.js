import { createSlice } from '@reduxjs/toolkit'
import { login } from '../thunk/AuthThunk'
import { forgotPassword } from '../thunk/ForgotPasswordThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: false,
  user: false,
  isAuthenticated: false,
  message: '',
}

export const forgotPasswordSlice = createSlice({
  name: 'forgotPasswordSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.fulfilled, (state, action) => {
        console.log('forgotPassword.fulfilled', action)
        state.errorMessage = false
        state.isLoading = false
        state.message = action.payload.message
        state.isAuthenticated = true
      })
      .addCase(forgotPassword.pending, function (state) {
        console.log('forgotPassword.pending')
        state.isLoading = true
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.message = ''
        state.errorMessage = action.payload.response.data.message
        state.isLoading = false
        state.error = true
        state.user = null
      })
  },
})

export const {} = forgotPasswordSlice.actions
export default forgotPasswordSlice.reducer
