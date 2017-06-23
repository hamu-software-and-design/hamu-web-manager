/**
 * Get client language
 * @return {string} The client language
 */
export function getClientLang() {
  const locale = navigator.userLanguage || navigator.language
  const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0]
  return localeWithoutRegionCode || 'en'
}
