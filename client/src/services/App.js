import React from 'react'
import MainNavbar from '../containers/MainNavbar/Index.js'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

import {parseQuery} from './Router/util.js'
import LocaleProvider from './Localization/Index.js'
/**
 * App container
 */
class App extends React.Component {
  static propTypes = {
    /** App locale */
    locale: PropTypes.string.isRequired,
    /** App location **/
    location: PropTypes.object.isRequired
  }
  render() {
    // redirect to fix lang params
    const {location, locale} = this.props
    const lang = parseQuery(location.search).lang
    if(!lang || lang !== locale) {
      return <Redirect to={location.pathname + '?lang=' + locale} />
    }
    // otherwise return children
    return (
      <LocaleProvider locale={locale}>
        <div className="h-vh100">
          <MainNavbar />
          {this.props.children}
        </div>
      </LocaleProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale
  }
}

export default withRouter(connect(mapStateToProps, null)(App))
