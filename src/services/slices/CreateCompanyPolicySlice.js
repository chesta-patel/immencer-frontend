import { createSlice } from '@reduxjs/toolkit'
import { createNewCompanyPolicy } from '../thunk/CreateNewCompanyPolicyThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: false,
  message: '',
}

export const CreatePolicy = createSlice({
  name: 'CreateEmp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewCompanyPolicy.fulfilled, (state, action) => {
        state.message = action.payload.code
      })
      .addCase(createNewCompanyPolicy.pending, function (state, action) {})
      .addCase(createNewCompanyPolicy.rejected, (state, action) => {})
  },
})

export const {} = CreatePolicy.actions
export default CreatePolicy.reducer
