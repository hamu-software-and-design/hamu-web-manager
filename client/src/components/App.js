import React from 'react'
import MainNavbar from './MainNavbar'

/**
 * App container
 */
export default class App extends React.Component {
  render() {
    return (
      <div>
        <MainNavbar />
        {this.props.children}
      </div>
    )
  }
}
