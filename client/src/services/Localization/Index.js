import React from 'react'
import {IntlProvider, addLocaleData} from 'react-intl'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import en from 'react-intl/locale-data/en'
import vi from 'react-intl/locale-data/vi'

import enData from './data/en.json'
import viData from './data/vi.json'
import {flattenObject} from '../util/manipulation.js'
import {parseQuery} from '../Router/util.js'


addLocaleData([...en, ...vi])

const localeData = {
  en: flattenObject(enData),
  vi: flattenObject(viData)
}

class LocaleProvider extends React.Component {
  static propTypes = {
    /** App location */
    locale: PropTypes.string.isRequired
  }
  render() {
    const {locale} = this.props
    return (
      <IntlProvider locale={locale} messages={localeData[locale]}>
        {this.props.children}
      </IntlProvider>
    )
  }
}

export default withRouter(LocaleProvider)
