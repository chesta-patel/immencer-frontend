import { createSlice } from '@reduxjs/toolkit'
import { addNewAssetsApp } from './../thunk/CreateNewAssetsAppThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const CreateAssetsApp = createSlice({
  name: 'createAssetsApplication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewAssetsApp.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(addNewAssetsApp.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(addNewAssetsApp.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = CreateAssetsApp.actions
export default CreateAssetsApp.reducer
