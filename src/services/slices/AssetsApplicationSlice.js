import { createSlice } from '@reduxjs/toolkit'
import { assetsApplication } from '../thunk/AssetsApplicationThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  infoList: [],
}

export const getAssetsApplication = createSlice({
  name: 'getAssetsApplication',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(assetsApplication.fulfilled, (state, action) => {
      state.infoList = action.payload?.data?.data?.assets
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    })
    builder.addCase(assetsApplication.pending, (state, action) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    builder.addCase(assetsApplication.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.errorMessage = action.error
    })
  },
})

export const {} = getAssetsApplication.actions
export default getAssetsApplication.reducer
