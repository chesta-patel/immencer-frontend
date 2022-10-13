import { createSlice } from '@reduxjs/toolkit'
import { getCreateNewEmpData } from '../thunk/CreateNewEmpDataThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  formData: [],
}

export const createNewEmpData = createSlice({
  name: 'createNewEmpData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCreateNewEmpData.fulfilled, (state, action) => {
        state.isLoading = false
        state.formData = { ...state.formData, ...action.payload }
      })
      .addCase(getCreateNewEmpData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCreateNewEmpData.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
      })
  },
})

export const {} = createNewEmpData.actions
export default createNewEmpData.reducer
