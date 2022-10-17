import { createSlice } from '@reduxjs/toolkit'
import { LeaveApply } from '../thunk/LeaveApplyThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const ApplyLeave = createSlice({
  name: 'ApplyLeave',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LeaveApply.fulfilled, (state, action) => {
        console.log('LeaveApply fulfield', action.payload)
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(LeaveApply.pending, function (state, action) {
        console.log('LeaveApply pending', action.payload)
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(LeaveApply.rejected, (state, action) => {
        console.log('LeaveApply pending', action.payload)
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
  },
})

export const {} = ApplyLeave.actions
export default ApplyLeave.reducer
