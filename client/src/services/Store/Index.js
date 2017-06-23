import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import { routerMiddleware, routerReducer, replace } from 'react-router-redux'
import logger from 'redux-logger'

import {parseQuery} from '../Router/util.js'
import {getClientLang} from '../Localization/util.js'

/**
 * Wrapper for the redux store
 */
export default class Store {
  constructor(history) {
    const middleware = routerMiddleware(history)
    this.store = createStore(
      combineReducers({
        router: routerReducer
      }),
      applyMiddleware(middleware, logger)
    )
    const location = history.location
    const queries = parseQuery(location.search)
    if(!queries.lang) {
      this.store.dispatch(replace(location.pathname + '?lang=' + getClientLang()))
    }
  }
}
