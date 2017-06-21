import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createBrowserHistory} from 'history'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.scss'

import Store from './services/Store.js'
import Router from './services/Router.js'

const history = createBrowserHistory()
const appStore = new Store(history)

ReactDOM.render(
  <Provider store={appStore.store}>
    <Router history={history} />
  </Provider>,
  document.getElementById('app'))
