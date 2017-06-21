import React from 'react'
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap'

/**
 * Main navbar for the app
 */
export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }
  /**
   * Toggles the collapsable element
   */
  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <Navbar className="bg-white z-index-5" toggleable light>
        <div className="container">
          <NavbarBrand>
            <span className="text-uppercase">Hamu Web Manager</span>
          </NavbarBrand>
          <NavbarToggler right onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#"><span className="flag-icon flag-icon-us"></span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}
