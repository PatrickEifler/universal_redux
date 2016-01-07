import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'
import routes from '../common/components/routes'
import createBrowserHistory from 'history/lib/createBrowserHistory'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)
const rootElement = document.getElementById('app')
const history = createBrowserHistory()

console.log("store",store);
render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  rootElement
)