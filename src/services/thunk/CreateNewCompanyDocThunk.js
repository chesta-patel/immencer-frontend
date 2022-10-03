import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

let token = localStorage.getItem('token')
const API_URL = `${process.env.REACT_APP_API_URL}`

export const addNewCompanyDoc = createAsyncThunk('', async (payload) => {
  console.log('payload', payload)
  try {
    const response = await axios.post(`${API_URL}companyDocuments`, payload, {
      headers: {
        authentication: `${token}`,
      },
    })
    return response
  } catch (error) {
    return error
  }
})
