import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from './AuthThunk'

const initialState = {
  empStatus: [],
  department: [],
  designation: [],
  bloodGroup: [],
  gender: [],
  nationality: [],
  teamLead: [],
}

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log(action.payload.data)
      switch (Object.keys(action.payload.data)?.[0]) {
        case 'employmentStatus':
          state.empStatus = action.payload.data.employmentStatus
          break
        case 'department':
          state.department = action.payload.data.department
          break
        case 'designation':
          state.designation = action.payload.data.designation
          break
        case 'bloodGroup':
          state.bloodGroup = action.payload.data.bloodGroup
          break
        case 'gender':
          state.gender = action.payload.data.gender
          break
        case 'nationality':
          state.nationality = action.payload.data.nationality
          break
        case 'teamLead':
          state.teamLead = action.payload.data.teamLead
          break
        default:
          break
      }
      state.dropdown = action.payload.data
    })
  },
})

export const {} = dropdownSlice.actions
export default dropdownSlice.reducer
