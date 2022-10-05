import { createSlice } from '@reduxjs/toolkit'
import { companyPolicy } from '../thunk/CompanyPolicyThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  infoList: [],
}

export const getCompanyPolicy = createSlice({
  name: 'getCompanyPolicy',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(companyPolicy.fulfilled, (state, action) => {
      state.infoList = action.payload?.data?.data?.companyPolicies
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    })
    builder.addCase(companyPolicy.pending, (state, action) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    builder.addCase(companyPolicy.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.errorMessage = action.error
    })
  },
})

export const {} = getCompanyPolicy.actions
export default getCompanyPolicy.reducer
