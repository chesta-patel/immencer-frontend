import { createAsyncThunk } from '@reduxjs/toolkit'
import { getToken, setToken, removeToken } from '../../utils/Helpers'
import api from '../api/Api'
import history from '../../utils/History'

export const login = createAsyncThunk('auth/login', async (payload) => {
  const response = await api.post('/login', payload)
  setToken(response.data.accessToken)
  history.push('/')
  console.log(response.data)
  return response.data
})
