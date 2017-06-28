import {CHANGE_LOCALE} from '../actions/locale.js'
import {parseQuery} from '../../Router/util.js'
import {getClientLang} from '../../Localization/util.js'

const ACCEPTED_LANGS = ['en', 'vi']

function getInitialState() {
  const queries = parseQuery(window.location.search)
  if(!queries.lang) {
    const clientLang = getClientLang()
    return clientLang
  }
  if(ACCEPTED_LANGS.indexOf(queries.lang) == -1) {
    return ACCEPTED_LANGS[0]
  }
  return queries.lang
}

export default function locale(state = getInitialState(), action) {
  switch(action.type) {
    case CHANGE_LOCALE:
      return action.locale
    default:
      return state
  }
}
