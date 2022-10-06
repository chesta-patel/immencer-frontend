import { createSlice } from '@reduxjs/toolkit'
import { deleteCompanyDoc } from '../thunk/DeleteCompanyDocThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const DeleteCompanyDoc = createSlice({
  name: 'DeleteCompanyDocument',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteCompanyDoc.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(deleteCompanyDoc.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(deleteCompanyDoc.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = DeleteCompanyDoc.actions
export default DeleteCompanyDoc.reducer
