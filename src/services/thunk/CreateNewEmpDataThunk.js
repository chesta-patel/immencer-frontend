import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const getCreateNewEmpData = createAsyncThunk(
  'getCreateNewEmpData',
  async (payload) => {
    try {
      return payload
    } catch (error) {
      return error
    }
  }
)

export const CreateNewEmployee = createAsyncThunk(
  '',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}employee`, payload, {
        headers: {
          authentication: `${token}`,
        },
      })
      if (response.status === 201) {
        return response
      } else {
        return thunkAPI.rejectWithValue(response)
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
