import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import MainNavbar from '../../components/MainNavbar/Index.js'


const mapStateToProps = (state) => {
  isAuthenticated: state.auth.isAuthenticated
}

export default withRouter(MainNavbar)
