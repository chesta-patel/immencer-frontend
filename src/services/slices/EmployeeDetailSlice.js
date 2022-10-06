import { createSlice } from '@reduxjs/toolkit'
import { empDetail } from '../thunk/EmployeeDetailThunk'

const initialState = {
  isLoading: false,
  isSuccess: [],
  isError: false,
  errorMessage: '',
}

export const getEmpDetail = createSlice({
  name: 'getEmpDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(empDetail.fulfilled, (state, action) => {
        console.log(
          'update emp detail call',
          action?.payload?.data?.data?.employee
        )

        state.isSuccess = action?.payload?.data?.data?.employee
        state.isLoading = false
      })
      .addCase(empDetail.pending, (state) => {
        state.isLoading = true
      })
      .addCase(empDetail.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
      })
  },
})

export const {} = getEmpDetail.actions
export default getEmpDetail.reducer
