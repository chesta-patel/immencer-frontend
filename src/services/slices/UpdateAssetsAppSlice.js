import { createSlice } from '@reduxjs/toolkit'
import { updateNewAssetsApp } from '../thunk/UpdateNewAssetsAppThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const UpdateAssetsApp = createSlice({
  name: 'updateAssetsApplication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateNewAssetsApp.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(updateNewAssetsApp.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(updateNewAssetsApp.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = UpdateAssetsApp.actions
export default UpdateAssetsApp.reducer
