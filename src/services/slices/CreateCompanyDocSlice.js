import { createSlice } from '@reduxjs/toolkit'
import { addNewCompanyDoc } from '../thunk/CreateNewCompanyDocThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: false,
  message: '',
}

export const CreateCompanyDoc = createSlice({
  name: 'CreateEmp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewCompanyDoc.fulfilled, (state, action) => {
        state.message = action.payload.code
      })
      .addCase(addNewCompanyDoc.pending, function (state, action) {})
      .addCase(addNewCompanyDoc.rejected, (state, action) => {})
  },
})

export const {} = CreateCompanyDoc.actions
export default CreateCompanyDoc.reducer
