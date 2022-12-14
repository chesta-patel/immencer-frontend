import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../thunk/AuthThunk'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  empStatus: [],
  department: [],
  designation: [],
  bloodGroup: [],
  gender: [],
  nationality: [],
  teamLead: [],
  countries: [],
  states: [],
  city: [],
  holidayType: [],
  assetStatus: [],
  assetType: [],
  leaveType: [],
  leaveDayType: [],
  permission: [],
  leaveStatus: [],
}

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
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
          case 'countries':
            state.countries = action.payload.data.countries
            break
          case 'states':
            state.states = action.payload.data.states
            break
          case 'cities':
            state.city = action.payload.data.cities
            break
          case 'holidayType':
            state.holidayType = action.payload.data.holidayType
            break
          case 'assetsStatus':
            state.assetStatus = action.payload.data.assetsStatus
            break
          case 'assetType':
            state.assetType = action.payload.data.assetType
            break
          case 'leaveType':
            state.leaveType = action.payload.data.leaveType
            break
          case 'leaveDayType':
            state.leaveDayType = action.payload.data.leaveDayType
            break
          case 'permission':
            state.permission = action.payload.data.permission
            break
          case 'leaveStatus':
            state.leaveStatus = action.payload.data.leaveStatus
            break
          default:
            break
        }
      })
      .addCase(fetchData.pending, function (state, action) {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
      })
      .addCase(fetchData.rejected, function (state, action) {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
      })
  },
})

export const {} = dropdownSlice.actions
export default dropdownSlice.reducer
