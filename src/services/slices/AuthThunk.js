import { createAsyncThunk } from '@reduxjs/toolkit'
import { setToken } from '../../utils/Helpers'
import api from '../api/Api'
import history from '../../utils/History'

export const login = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    try {
      const response = await api.post('/', payload)
      if (response.status === 200) {
        setToken(response.data.data.token)
        window.location.href = '/'
        return response.data
      } else {
        return thunkAPI.rejectWithValue(response.data)
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)