import { createSlice } from '@reduxjs/toolkit'
import { addNewCompanyDoc } from '../thunk/CreateNewCompanyDocThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const CreateCompanyDoc = createSlice({
  name: 'createCompanyDocument',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewCompanyDoc.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(addNewCompanyDoc.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(addNewCompanyDoc.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = CreateCompanyDoc.actions
export default CreateCompanyDoc.reducer
