export const getToken = () => {
  return localStorage.getItem('token')
}

export const setToken = (val) => {
  return localStorage.setItem('token', val)
}

export const removeToken = () => {
  return localStorage.removeItem('token')
}
