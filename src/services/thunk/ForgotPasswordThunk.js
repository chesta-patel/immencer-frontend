import { createAsyncThunk } from '@reduxjs/toolkit'
import { setToken } from '../../utils/Helpers'
import axios from 'axios'

// let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const forgotPassword = createAsyncThunk(
  'forgotPassword',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `${API_URL}auth/forgotPassword`,
        payload
      )
      if (response.status === 200) {
        setToken(response.data.data.token)
        return response.data
      } else {
        return thunkAPI.rejectWithValue(response.data)
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
