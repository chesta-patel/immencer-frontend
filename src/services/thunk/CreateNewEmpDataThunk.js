import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCreateNewEmpData = createAsyncThunk(
  'getCreateNewEmpData',
  async (payload) => {
    try {
      console.log('Address Data', payload)
      return payload
    } catch (error) {
      return error
    }
  }
)
