import React from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {FormattedMessage, injectIntl, intlShape} from 'react-intl'

class LoginForm extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired
  }
  render() {
    const {className, intl} = this.props
    return (
      <Form className={className}>
        <FormGroup>
          <Input id="loginUserName" type="text" name="username" placeholder={intl.formatMessage({id: "login.form.username"})} />
        </FormGroup>
        <FormGroup>
          <Input id="loginPassword" type="password" name="password" placeholder={intl.formatMessage({id: "login.form.password"})} />
        </FormGroup>
        <Button color="primary" block><FormattedMessage id="login.form.submit" /></Button>
      </Form>
    )
  }
}

export default injectIntl(LoginForm)
