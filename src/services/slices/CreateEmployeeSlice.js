import { createSlice } from '@reduxjs/toolkit'
import { CreateNewEmployee } from '../thunk/CreateNewEmpDataThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}

export const CreateEmp = createSlice({
  name: 'CreateEmp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateNewEmployee.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccessEmp = action.payload.data.data
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
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
  },
})

export const {} = CreateEmp.actions
export default CreateEmp.reducer
