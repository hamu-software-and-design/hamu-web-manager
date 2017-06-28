import React from 'react'
import { ConnectedRouter, replace } from 'react-router-redux'
import {Route, Redirect} from 'react-router'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import App from '../App.js'
import Login from '../../scenes/Login/Index.js'
import Dashboard from '../../scenes/Dashboard/Index.js'

/**
 * Router for the app
 */
class Router extends React.Component {
  static propTypes = {
    /** App history */
    history: PropTypes.object.isRequired,
    /** Whether the app is authenticated */
    isAuthenticated: PropTypes.bool.isRequired,
    /** App locale */
    locale: PropTypes.string.isRequired
  }

  render() {
    const {history, isAuthenticated, locale} = this.props
    return (
      <ConnectedRouter history={history}>
        <App>
          <Route exact path="/" component={() => (
              isAuthenticated ? <Redirect to={"/dashboard?lang=" + locale} /> : <Login />
            )} />
          <Route exact path="/dashboard" component={() => (
              isAuthenticated ? <Dashboard /> : <Redirect to={"/?lang=" + locale} />
            )} />
        </App>
      </ConnectedRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    locale: state.locale
  }
}

export default connect(mapStateToProps,null)(Router)
