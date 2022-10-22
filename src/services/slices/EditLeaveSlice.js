import { createSlice } from '@reduxjs/toolkit'
import { EditLeave } from '../thunk/EditLeaveThunk'
import { updateNewCompanyPolicy } from '../thunk/UpdateNewCompanyPolicyThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const EditLeaveApplication = createSlice({
  name: 'EditLeaveApplication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(EditLeave.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(EditLeave.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(EditLeave.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = EditLeaveApplication.actions
export default EditLeaveApplication.reducer
