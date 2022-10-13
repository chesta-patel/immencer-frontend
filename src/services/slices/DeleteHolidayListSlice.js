import { createSlice } from '@reduxjs/toolkit'
import { deleteHolidayData } from '../thunk/DeleteHolidayListThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const DeleteHolidayList = createSlice({
  name: 'DeleteHolidayList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteHolidayData.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(deleteHolidayData.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(deleteHolidayData.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = DeleteHolidayList.actions
export default DeleteHolidayList.reducer
