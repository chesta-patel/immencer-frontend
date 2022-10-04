import { createSlice } from '@reduxjs/toolkit'
import { createNewCompanyPolicy } from '../thunk/CreateNewCompanyPolicyThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const CreatePolicy = createSlice({
  name: 'createCompanyPolicy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewCompanyPolicy.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(createNewCompanyPolicy.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(createNewCompanyPolicy.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = CreatePolicy.actions
export default CreatePolicy.reducer
