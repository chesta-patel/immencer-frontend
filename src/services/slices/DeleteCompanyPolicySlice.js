import { createSlice } from '@reduxjs/toolkit'
import { deleteCompanyPolicy } from '../thunk/DeleteCompanyPolicyThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const DeleteCompanyPolicy = createSlice({
  name: 'DeleteCompanyPolicy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteCompanyPolicy.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(deleteCompanyPolicy.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(deleteCompanyPolicy.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = DeleteCompanyPolicy.actions
export default DeleteCompanyPolicy.reducer
