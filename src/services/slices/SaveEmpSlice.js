import { createSlice } from '@reduxjs/toolkit'
import { login } from '../thunk/AuthThunk'
import { setEmp } from '../thunk/SaveEmp'

const initialState = {
  empInfo: [],
}

export const setEmpSlice = createSlice({
  name: 'setEmployee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setEmp.fulfilled, (state, action) => {
      state.empInfo = action?.payload
    })
  },
})

export const {} = setEmpSlice.actions
export default setEmpSlice.reducer
