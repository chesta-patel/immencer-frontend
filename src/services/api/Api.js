import axios from 'axios'

const baseURL = 'https://fakestoreapi.com/auth/login'

const Api = axios.create({
  baseURL,
})

export default Api
