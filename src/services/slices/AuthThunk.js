import { createAsyncThunk } from '@reduxjs/toolkit'
import { setToken } from '../../utils/Helpers'
import api from '../api/Api'

export const login = createAsyncThunk('auth/login', async (payload) => {
  console.log('m')
  const response = await api.post('/', payload)
  setToken(response.data.data.token)
  window.location.href = '/'
  return response.data
})
