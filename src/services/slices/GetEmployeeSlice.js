import { createSlice } from '@reduxjs/toolkit'
import { empData } from '../thunk/GetEmployee'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  employeeData: [],
}

export const getEmpSlice = createSlice({
  name: 'getEmp',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(empData.fulfilled, (state, action) => {
      state.employeeData = action.payload?.data?.data?.employeeList
      state.loader = false
    })
    builder.addCase(empData.pending, (state, action) => {
      state.loader = true
    })
  },
})

export const {} = getEmpSlice.actions
export default getEmpSlice.reducer
