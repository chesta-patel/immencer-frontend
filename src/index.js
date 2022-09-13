import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './assets/scss/immence.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import history from './utils/History'
import { Provider } from 'react-redux'
import store from './store/Store'

ReactDOM.render(
  <React.Fragment>
    <Suspense fallback={<div />}>
      <Router history={history}>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </Suspense>
  </React.Fragment>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
