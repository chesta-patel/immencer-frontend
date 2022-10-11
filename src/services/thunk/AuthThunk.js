import { createAsyncThunk } from '@reduxjs/toolkit'
import { setToken } from '../../utils/Helpers'
import axios from 'axios'
import { tokenValidation } from '../../utils/Utils'
import { useHistory } from 'react-router'

let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const login = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}auth/login`, payload)
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
    const response = await axios.get(
      `${API_URL}${payload}`,
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
