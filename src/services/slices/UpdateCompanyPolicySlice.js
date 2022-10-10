import { createSlice } from '@reduxjs/toolkit'
import { updateNewCompanyPolicy } from '../thunk/UpdateNewCompanyPolicyThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const UpdateCompanyPolicy = createSlice({
  name: 'updateCompanyPolicy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateNewCompanyPolicy.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(updateNewCompanyPolicy.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(updateNewCompanyPolicy.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = UpdateCompanyPolicy.actions
export default UpdateCompanyPolicy.reducer
