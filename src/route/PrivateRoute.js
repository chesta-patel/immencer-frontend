import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const auth = localStorage.getItem('token')

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    rest
    render={(props) =>
      auth ? (
        <Component {...props} {...rest}></Component>
      ) : (
        <Redirect to={'/auth-login'}></Redirect>
      )
    }
  ></Route>
)

export default PrivateRoute
