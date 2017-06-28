import React from 'react'
import PropTypes from 'prop-types'

export default class LocaleButton extends React.Component {
  static propTypes = {
    /** Locale to change to */
    to: PropTypes.string.isRequired,
    /** On click handler */
    onClick: PropTypes.func.isRequired
  }
  handleClick(e) {
    e.preventDefault()
    this.props.onClick(this.props.to)
  }
  render() {
    return (
      <div className={this.props.className} onClick={(e) => this.handleClick(e)}>
        {
          this.props.children
        }
      </div>
    )
  }
}
