import { createSlice } from '@reduxjs/toolkit'
import { companyDocument } from '../thunk/CompanyDocumentThunk'

const initialState = {
  infoList: [],
  loader: false,
}

export const getCompanyDocument = createSlice({
  name: 'getCompanyDocument',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(companyDocument.fulfilled, (state, action) => {
      state.infoList = action.payload?.data?.data?.companyDocuments
      state.loader = false
    })
    builder.addCase(companyDocument.pending, (state, action) => {
      state.loader = true
    })
  },
})

export const {} = getCompanyDocument.actions
export default getCompanyDocument.reducer
