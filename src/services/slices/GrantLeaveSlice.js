import { createSlice } from '@reduxjs/toolkit'
import { GrantLeaveAssign } from '../thunk/GrantLeaveThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const ApplyGrantLeave = createSlice({
  name: 'ApplyGrantLeave',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GrantLeaveAssign.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(GrantLeaveAssign.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(GrantLeaveAssign.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
  },
})

export const {} = ApplyGrantLeave.actions
export default ApplyGrantLeave.reducer
