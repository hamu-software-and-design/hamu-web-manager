import { connect } from 'react-redux'
import { changeLocale } from '../../services/Store/actions/locale.js'
import LocaleButton from '../../components/MainNavbar/LocaleButton.js'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (locale) => {
      dispatch(changeLocale(locale))
    }
  }
}
export default connect(null, mapDispatchToProps)(LocaleButton)
