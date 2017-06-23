import React from 'react'
import { ConnectedRouter, replace } from 'react-router-redux'
import {Route, Redirect} from 'react-router'
import PropTypes from 'prop-types'

import App from '../App.js'
import Login from '../../scenes/Login/Index.js'
import Test from '../../components/Test.js'
import {parseQuery} from './util.js'


/**
 * Router for the app
 */
export default class Router extends React.Component {
  static propTypes = {
    /** App history */
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <App>
          <Route exact path="/" component={Login} />
          <Route exact path="/test" component={Test} />
        </App>
      </ConnectedRouter>
    )
  }
}
