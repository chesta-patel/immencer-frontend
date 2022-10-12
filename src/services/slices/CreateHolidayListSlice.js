import { createSlice } from '@reduxjs/toolkit'
import { createNewHolidayList } from '../thunk/CreateNewHolidayThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  message: '',
}

export const CreateHolidayList = createSlice({
  name: 'createHolidayList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewHolidayList.fulfilled, (state, action) => {
        state.message = action.payload.code
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(createNewHolidayList.pending, function (state, action) {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(createNewHolidayList.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.errorMessage = action.error
      })
  },
})

export const {} = CreateHolidayList.actions
export default CreateHolidayList.reducer
