import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const deleteCompanyDoc = createAsyncThunk(
  'deleteCompanyDoc',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${API_URL}companyDocument/${payload}`,
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
