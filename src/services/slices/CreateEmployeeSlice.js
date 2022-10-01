import { createSlice } from '@reduxjs/toolkit'
import { CreateNewEmployee } from '../thunk/CreateNewEmpDataThunk'

const initialState = {
  //   isLoading: false,
  error: false,
  message: '',
}

export const CreateEmp = createSlice({
  name: 'CreateEmp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateNewEmployee.fulfilled, (state, action) => {
        state.message = action.payload.code
      })
      .addCase(CreateNewEmployee.pending, function (state, action) {})
      .addCase(CreateNewEmployee.rejected, (state, action) => {})
  },
})

export const {} = CreateEmp.actions
export default CreateEmp.reducer
