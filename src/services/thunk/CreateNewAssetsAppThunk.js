import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const addNewAssetsApp = createAsyncThunk(
  'addNewAssetsApp',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}asset`, payload, {
        headers: {
          authentication: `${token}`,
        },
      })
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
