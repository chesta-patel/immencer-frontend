import { createSlice } from '@reduxjs/toolkit'
import { CreateNewEmployee } from '../thunk/CreateNewEmpDataThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const CreateEmp = createSlice({
  name: 'CreateEmp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateNewEmployee.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(CreateNewEmployee.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(CreateNewEmployee.rejected, (state, action) => {
        if (action.payload.response.data.code == '400') {
          state.errorMessage = action.payload.response.data.message
        } else {
          state.errorMessage = action.payload.response.data.additionalInfo
        }
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = CreateEmp.actions
export default CreateEmp.reducer
