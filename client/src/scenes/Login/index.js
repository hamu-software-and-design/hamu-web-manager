import React from 'react'
import {Card, CardBlock, CardTitle} from 'reactstrap'
import LoginApp from './containers/LoginApp.js'

export default class LoginPage extends React.Component {
  render() {
    return (
      <div id="login-page" className="d-flex justify-content-center align-items-center h-vhfill">
        <LoginApp />
      </div>
    )
  }
}
