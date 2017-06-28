import React from 'react'
import PropTypes from 'prop-types'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {FormattedMessage, intlShape} from 'react-intl'

export default class LoginForm extends React.Component {
  static propTypes = {
    /** Intl context */
    intl: intlShape.isRequired,
    /** Submit handler */
    onSubmit: PropTypes.func.isRequired,
    /** Whether auth is fetching */
    isFetching: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  isValid(username, password) {
    return (username && password)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const creds = Object.assign({}, this.state)
    this.props.onSubmit(creds)
  }

  render() {
    const {className, intl, isFetching} = this.props
    const {username, password} = this.state
    return (
      <Form>
        <div className="form-content">
          <FormGroup>
            <Input
              id="loginUserName"
              type="text"
              name="username"
              value={username}
              onChange={e => this.handleChange(e)}
              placeholder={intl.formatMessage({id: "login.form.username"})} />
          </FormGroup>
          <FormGroup>
            <Input
              id="loginPassword"
              type="password"
              name="password"
              value={password}
              onChange={e => this.handleChange(e)}
              placeholder={intl.formatMessage({id: "login.form.password"})} />
          </FormGroup>
        </div>
        <Button
          color="primary"
          disabled={!this.isValid(username, password) && !isFetching}
          onClick={e => this.handleSubmit(e)}
          block>
          <FormattedMessage id="login.form.submit" />
        </Button>
      </Form>
    )
  }
}
