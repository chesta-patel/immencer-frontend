import { createSlice } from '@reduxjs/toolkit'
import { companyPolicy } from '../thunk/CompanyPolicyThunk'

const initialState = {
  infoList: [],
  loader: false,
}

export const getCompanyPolicy = createSlice({
  name: 'getCompanyPolicy',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(companyPolicy.fulfilled, (state, action) => {
      state.infoList = action.payload?.data?.data?.companyPolicies
      state.loader = false
    })
    builder.addCase(companyPolicy.pending, (state, action) => {
      state.loader = true
    })
  },
})

export const {} = getCompanyPolicy.actions
export default getCompanyPolicy.reducer
