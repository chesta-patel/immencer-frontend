import { createSlice } from '@reduxjs/toolkit'
import { assetsType } from '../thunk/AssetsTypeThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  infoList: [],
}

export const getAssetsType = createSlice({
  name: 'getAssetsType',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(assetsType.fulfilled, (state, action) => {
      state.infoList = action.payload?.data?.data?.assetType
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    })
    builder.addCase(assetsType.pending, (state, action) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    builder.addCase(assetsType.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.errorMessage = action.error
    })
  },
})

export const {} = getAssetsType.actions
export default getAssetsType.reducer
