import { createSlice } from '@reduxjs/toolkit'
import { holidayList } from '../thunk/HolidayListThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  infoList: [],
}

export const getHolidayList = createSlice({
  name: 'getHolidayList',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(holidayList.fulfilled, (state, action) => {
      state.infoList = action.payload?.data?.data?.holiday
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    })
    builder.addCase(holidayList.pending, (state, action) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    builder.addCase(holidayList.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.errorMessage = action.error
    })
  },
})

export const {} = getHolidayList.actions
export default getHolidayList.reducer
