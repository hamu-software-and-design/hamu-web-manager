import React from 'react'
import {Card, CardBlock, CardTitle} from 'reactstrap'
import {FormattedMessage} from 'react-intl'
import PropTypes from 'prop-types'

import LoginForm from '../containers/LoginForm.js'
import LoadingCat from '../../../components/LoadingCat.js'
import CSSTransitionGroup from '../../../components/CSSTransitionGroup.js'


export default class LoginApp extends React.Component {

  static propTypes = {
    /** Whether a login request is fetching */
    isFetching: PropTypes.bool.isRequired,
    /** Auth error status */
    status: PropTypes.number,
    /** Auth attempts */
    attempts: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      status: -1
    }
  }

  render() {
    const {status, isFetching, attempts} = this.props
    return (
      <CSSTransitionGroup
        id="transition-container"
        className="d-flex justify-content-center align-items-center h-100per w-100per"
        component="div"
        transitionName="login"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}>
        {
          isFetching ? <LoadingCat /> : <Card key={"login-key" + attempts} id="login-card" className={"z-depth-5 " + (status ? "shake " : "bounceInDown ")}>
            <CardBlock>
              <CardTitle className="text-center"><FormattedMessage id="login.title" /></CardTitle>
              <hr />
              <LoginForm />
            </CardBlock>
          </Card>
        }
      </CSSTransitionGroup>
    )
  }
}
