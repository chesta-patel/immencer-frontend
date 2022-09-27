import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const setEmp = createAsyncThunk('', async (payload, thunkAPI) => {
  console.log('saveEmpthunk', payload)
  try {
    const response = await axios.post('', payload)
    // if (response.status === 200) {
    // setToken(response.data.data.token)
    return response.data
    // } else {
    // return thunkAPI.rejectWithValue(response.data)
    // }
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
