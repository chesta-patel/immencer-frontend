import { createSlice } from '@reduxjs/toolkit'
import { EmployeeUpdate } from '../thunk/EmployeeEditThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}

export const empUpdate = createSlice({
  name: 'empUpdate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(EmployeeUpdate.fulfilled, (state, action) => {
        console.log('employee edit  fulfield ', action)
      })
      .addCase(EmployeeUpdate.pending, function (state, action) {
        console.log('employee edit  pending ', action)
      })
      .addCase(EmployeeUpdate.rejected, (state, action) => {
        console.log('employee edit  reject ', action)
      })
  },
})

export const {} = empUpdate.actions
export default empUpdate.reducer
