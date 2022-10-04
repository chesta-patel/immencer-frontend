import React from 'react'
import ReactDOM from 'react-dom'
import './assets/scss/immence.scss'
import { Router } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import history from './utils/History'
import { Provider } from 'react-redux'
import store from './store/Store'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.Fragment>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
