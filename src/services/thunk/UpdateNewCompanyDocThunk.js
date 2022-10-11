import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const updateNewCompanyDoc = createAsyncThunk(
  'updateNewCompanyDoc',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.put(
        `${API_URL}companyDocument/${payload.id}`,
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
