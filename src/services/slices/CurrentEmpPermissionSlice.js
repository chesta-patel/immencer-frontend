import { createSlice } from '@reduxjs/toolkit'
import { currentEmployee } from '../thunk/CurrentEmpPermissionThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  currentEmp: [],
}

export const getCurrentEmp = createSlice({
  name: 'getCurrentEmp',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(currentEmployee.fulfilled, (state, action) => {
      state.currentEmp = action?.payload?.data?.data?.employee
      state.isLoading = false
      state.isSuccess = true
    })
    builder.addCase(currentEmployee.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
  },
})

export const {} = getCurrentEmp.actions
export default getCurrentEmp.reducer
