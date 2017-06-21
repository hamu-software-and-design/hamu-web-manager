import React from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

export default class LoginForm extends React.Component {
  render() {
    const {className} = this.props
    return (
      <Form className={className}>
        <FormGroup>
          <Input id="loginUserName" type="text" name="username" placeholder="username" />
        </FormGroup>
        <FormGroup>
          <Input id="loginPassword" type="password" name="password" placeholder="password" />
        </FormGroup>
        <Button color="primary" block>Login</Button>
      </Form>
    )
  }
}
