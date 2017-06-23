import React from 'react'
import MainNavbar from '../components/MainNavbar/Index.js'
import PropTypes from 'prop-types'

import LocaleProvider from './Localization/Index.js'
import { withRouter } from 'react-router'

import {parseQuery} from './Router/util.js'

/**
 * App container
 */
class App extends React.Component {
  render() {
    const {location} = this.props
    const lang = parseQuery(location.search).lang
    return (
      <LocaleProvider lang={lang}>
        <div className="h-vh100">
          <MainNavbar />
          {this.props.children}
        </div>
      </LocaleProvider>
    )
  }
}
export default withRouter(App)
