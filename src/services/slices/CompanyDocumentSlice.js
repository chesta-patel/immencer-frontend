import { createSlice } from '@reduxjs/toolkit'
import { companyDocument } from '../thunk/CompanyDocumentThunk'

const initialState = {
  infoList: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}

export const getCompanyDocument = createSlice({
  name: 'getCompanyDocument',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(companyDocument.fulfilled, (state, action) => {
      state.infoList = action.payload?.data?.data?.companyDocuments
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    })
    builder.addCase(companyDocument.pending, (state, action) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    builder.addCase(companyDocument.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.errorMessage = action.error
    })
  },
})

export const {} = getCompanyDocument.actions
export default getCompanyDocument.reducer
