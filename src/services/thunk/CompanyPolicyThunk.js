import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let token = localStorage.getItem('token')
const API_URL = `http://192.168.29.40:3001/v1/`
// const API_URL = `${process.env.REACT_APP_API_URL}`

export const companyPolicy = createAsyncThunk('', async (payload, thunkAPI) => {
  try {
    const response = await axios.get(
      `${API_URL}${payload}`,
      {
        headers: {
          authentication: `${token}`,
        },
      },
      payload
    )
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
