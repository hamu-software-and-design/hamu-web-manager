import React from 'react'
import {IntlProvider, addLocaleData} from 'react-intl'
import PropTypes from 'prop-types'
import en from 'react-intl/locale-data/en'
import vi from 'react-intl/locale-data/vi'
addLocaleData([...en, ...vi])

export default class LocaleProvider extends React.Component {
  static propTypes = {
    /** App language */
    lang: PropTypes.string.isRequired
  }
  render() {
    return (
      <IntlProvider locale={this.props.lang}>
        {this.props.children}
      </IntlProvider>
    )
  }
}
