import { createSlice } from '@reduxjs/toolkit'
import { GetLeave } from '../thunk/GetLeaveThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  leaveList: [],
  isError: false,
  errorMessage: '',
  message: '',
}

export const GetLeaveList = createSlice({
  name: 'GetLeaveList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetLeave.fulfilled, (state, action) => {
        state.leaveList = action.payload.data.data.leave
        console.log('action.payload', action.payload)
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(GetLeave.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(GetLeave.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
  },
})

export const {} = GetLeaveList.actions
export default GetLeaveList.reducer
