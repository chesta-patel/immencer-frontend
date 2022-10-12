import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const updateNewHolidayList = createAsyncThunk(
  'updateNewHolidayList',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.put(
        `${API_URL}holiday/${payload.id}`,
        payload.data,
        {
          headers: {
            authentication: `${token}`,
          },
        }
      )
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
