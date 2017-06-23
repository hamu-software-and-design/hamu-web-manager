import React from 'react'
import {Card, CardBlock, CardTitle} from 'reactstrap'
import {FormattedMessage} from 'react-intl'

import LoginForm from './LoginForm.js'

export default class LoginApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: -1
    }
  }
  render() {
    return (
      <Card className="z-depth-5">
        <CardBlock>
          <CardTitle className="text-center"><FormattedMessage id="login.title" /></CardTitle>
          <hr />
          <LoginForm />
        </CardBlock>
      </Card>
    )
  }
}
