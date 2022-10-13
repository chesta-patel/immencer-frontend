import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const createNewHolidayList = createAsyncThunk(
  'createNewHolidayList',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}holiday`, payload, {
        headers: {
          authentication: `${token}`,
        },
      })
      console.log('response createNewHolidayList', response)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
