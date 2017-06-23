import React from 'react'
import {Card, CardBlock, CardTitle} from 'reactstrap'
import LoginApp from './components/LoginApp.js'

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center h-vhfill">
        <LoginApp />
      </div>
    )
  }
}
