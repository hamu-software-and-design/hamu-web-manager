import LoginApp from '../components/LoginApp.js'
import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    status: state.auth.status,
    attempts: state.auth.attempts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(LoginApp))
