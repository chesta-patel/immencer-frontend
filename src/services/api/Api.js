import axios from 'axios'

const baseURL = 'http://192.168.29.40:3001/api/v1/auth/logIn'

const Api = axios.create({
  baseURL,
})

export default Api
