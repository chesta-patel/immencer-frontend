import { createSlice } from '@reduxjs/toolkit'
import { login } from '../thunk/AuthThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  user: false,
  isAuthenticated: false,
  message: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(login.pending, function (state) {
        state.isLoading = true
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
        state.message = action.payload.response.data.message
        state.user = null
      })
  },
})

export const {} = authSlice.actions
export default authSlice.reducer
