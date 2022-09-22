import { createAsyncThunk } from '@reduxjs/toolkit'
import { setToken } from '../../utils/Helpers'
import api from '../api/Api'
import empApi from '../api/employee/EmpStatusApi'
let token = localStorage.getItem('token')

export const login = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    try {
      const response = await api.post('/', payload)
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

export const fetchData = createAsyncThunk('', async (payload, thunkAPI) => {
  try {
    const response = await empApi.get(
      `${payload}`,
      {
        headers: {
          authentication: `${token}`,
        },
      },
      payload
    )
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
