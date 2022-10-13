import { createSlice } from '@reduxjs/toolkit'
import { deleteAssetsApp } from '../thunk/DeleteAssetsAppThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const DeleteAssetsApp = createSlice({
  name: 'DeleteAssetsApplication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteAssetsApp.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(deleteAssetsApp.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(deleteAssetsApp.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = DeleteAssetsApp.actions
export default DeleteAssetsApp.reducer
