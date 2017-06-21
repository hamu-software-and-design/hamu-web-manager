import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import {Route} from 'react-router'
import PropTypes from 'prop-types'

import App from '../components/App.js'
import Login from '../scenes/Login/index.js'

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
        </App>
      </ConnectedRouter>
    )
  }
}
