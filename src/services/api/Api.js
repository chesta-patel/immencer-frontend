import axios from 'react-axios'

const loginurl = ''

const Api = axios.create({
  loginurl,
})

export default Api
