import React from 'react'
import {IntlProvider, addLocaleData} from 'react-intl'
import PropTypes from 'prop-types'
import en from 'react-intl/locale-data/en'
import vi from 'react-intl/locale-data/vi'

import enData from './data/en.json'
import viData from './data/vi.json'
import {flattenObject} from '../util/manipulation.js'

addLocaleData([...en, ...vi])

const localeData = {
  en: flattenObject(enData),
  vi: flattenObject(viData)
}

export default class LocaleProvider extends React.Component {
  static propTypes = {
    /** App language */
    lang: PropTypes.string.isRequired
  }
  render() {
    const messages = localeData[this.props.lang]
    return (
      <IntlProvider locale={this.props.lang} messages={messages}>
        {this.props.children}
      </IntlProvider>
    )
  }
}
