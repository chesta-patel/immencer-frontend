import { createSlice } from '@reduxjs/toolkit'
import { GetGrantLeave } from '../thunk/GetGrantLeaveThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
  grantLeaveAssignList: [],
}

export const GetGrantLeaveList = createSlice({
  name: 'GetGrantLeaveList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetGrantLeave.fulfilled, (state, action) => {
        state.grantLeaveAssignList = action.payload.data.data.grantLeaveAssign
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(GetGrantLeave.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(GetGrantLeave.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
  },
})

export const {} = GetGrantLeaveList.actions
export default GetGrantLeaveList.reducer
