import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const EmployeeUpdate = createAsyncThunk(
  'EmployeeEdit',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.put(
        `${API_URL}employee/${payload.id}`,
        payload,
        {
          headers: {
            authentication: `${token}`,
          },
        }
      )
      console.log('response', response)

      if (response.status === 201) {
        return response
      } else {
        return thunkAPI.rejectWithValue(response)
      }
    } catch (error) {
      console.log('error', error)

      return thunkAPI.rejectWithValue(error)
    }
  }
)
