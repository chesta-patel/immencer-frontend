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
    builder
      .addCase(setEmp.fulfilled, (state, action) => {
        //   console.log('saveEmpslice', action.payload)
        state.empInfo = action.payload
      })
      .addCase(login.pending, function (state) {
        state.empInfo = true
      })
      .addCase(login.rejected, (state, action) => {
        state.empInfo = false
      })
  },
})

export const {} = setEmpSlice.actions
export default setEmpSlice.reducer
