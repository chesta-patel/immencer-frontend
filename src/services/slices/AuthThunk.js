import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setToken } from '../../utils/Helpers'
import api from '../api/Api'
import { setMessage } from './Message'

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
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)

export const authSlice = createSlice({
  name: 'authenticate',
  initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false
      state.isSuccess = false
      state.isFetching = false

      return state
    },
  },
  extraReducers: {
    [login.fulfilled]: (state) => {
      state.isFetching = 'fulfield'
      state.isSuccess = true
      return state
    },
    [login.pending]: (state) => {
      state.isFetching = 'panding'
    },
    [login.rejected]: (state) => {
      state.isFetching = 'invalid'
      state.isError = true
    },
  },
})

export const { clearState } = authSlice.actions

export const userSelector = (state) => state.authenticate
