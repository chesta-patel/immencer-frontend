import { createSlice } from '@reduxjs/toolkit'
import { deleteEmployee } from '../thunk/DeleteEmployeeThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const DeleteEmployeeDetail = createSlice({
  name: 'DeleteEmployeeDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(deleteEmployee.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = DeleteEmployeeDetail.actions
export default DeleteEmployeeDetail.reducer
