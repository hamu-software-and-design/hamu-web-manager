import LoginForm from '../components/LoginForm.js'
import {connect} from 'react-redux'
import {loginUser}  from '../../../services/Store/actions/auth.js'
import {injectIntl} from 'react-intl'

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (creds) => {
      dispatch(loginUser(creds))
    }
  }
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
