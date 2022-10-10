import { createSlice } from '@reduxjs/toolkit'
import { updateNewCompanyDoc } from '../thunk/UpdateNewCompanyDocThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const UpdateCompanyDoc = createSlice({
  name: 'updateCompanyDocument',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateNewCompanyDoc.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(updateNewCompanyDoc.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(updateNewCompanyDoc.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = UpdateCompanyDoc.actions
export default UpdateCompanyDoc.reducer
