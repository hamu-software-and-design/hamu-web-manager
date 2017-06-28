export const CHANGE_LOCALE = 'CHANGE_LOCALE'
import { push } from 'react-router-redux'


function setLocale(locale) {
  return {
    type: CHANGE_LOCALE,
    locale
  }
}

export function changeLocale(locale) {
  return function(dispatch, getStore) {
    dispatch(setLocale(locale))
    dispatch(push(getStore().router.location.pathname + "?lang=" + locale))
  }
}
