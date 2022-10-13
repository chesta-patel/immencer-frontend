import { createSlice } from '@reduxjs/toolkit'
import { updateNewHolidayList } from '../thunk/UpdateNewCompanyDocThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const UpdateHolidayList = createSlice({
  name: 'updateHolidayList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateNewHolidayList.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(updateNewHolidayList.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(updateNewHolidayList.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = UpdateHolidayList.actions
export default UpdateHolidayList.reducer
